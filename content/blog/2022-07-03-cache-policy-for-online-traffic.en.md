---
title: 'Cache policy for online traffic'
date: 2022-07-03T18:02:04+08:00
description: 'Design the cache header policy for online traffic for let.sh'
draft: false
tags: ['let.sh', 'Load Balancer']
image: '/img/blog/cache-policy-for-online-traffic/cover.jpg'
---

## How cache works among browser, CDN, and server

I'm working on [let.sh](https://let.sh) load balancer recently, and in order to provide the best performance and reduce the costs for frontend and backend projects, I've dug a lot of documentation and materials to design the cache policy of let.sh for online traffic.

<blog-image src="/img/blog/cache-policy-for-online-traffic/first-time-access.svg" support-dark-mode full-screen></blog-image>

Take let.sh for an example(as shown in the image above). When you first visit the site hosted on let.sh, the browser will send a request to let.sh load balancer. Then let.sh route the request to the server to get the raw file(sure the file has been compressed) and bypass the browser through the load balancer.

If you dig into the details of the image, you can see let.sh server responds to the request with a header `cache-control: no-cache`, which means the server is not allowing the load-balancer and browser to cache the response. The server is not allowing upstream to cache the response because this is a request for index.html, which might be changed in the future. Another reason is let.sh wants to provide an instant experience for developers when they publish their websites/apps online. One clicks to deploy and refresh to see the results.

So it seems not to cache anything, right? There are still 2 ways to cache the response: for files(like `/index.html`) likely to be changed in the future, I will introduce `Etag` header first. And then, I will introduce ' Cache-Control' header for the files not likely to be changed in the future.

### HTTP Etag

Now the problem we are facing for the files like `/index.html` is the file might be changed in the future, and the payload for the requests might be large. We can't reduce the requests because we have to let the browser check whether the file has been updated. So what about reducing the size of the payload?

Here it comes to the `Etag` header. The `Etag` (or entity tag) HTTP response header is an identifier for a specific resource version, like the unique id for each file. Once the file has been updated, the file will also be changed.

<blog-image src="/img/blog/cache-policy-for-online-traffic/etag.svg" support-dark-mode full-screen></blog-image>

Here is how `ETag` works:

- For the first time user access `/index.html` the server will response `index.html` file along with header `ETag`.
- The browser will store the `ETag` in the cache.
- And then the next time the user access the same file, the browser will send a request to the server with the `if-none-match` header.
- Once server rececived request through load balancer, server will compare the `if-none-match` with the `ETag` of the latest file, if the `ETag` is the same, the server will return **_empty body_** with status code `304`(Not Modified) and header `ETag`.

#### Validation

The `ETag` mechanism supports both strong validation and weak validation. They are distinguished by the presence of an initial `"W/"` in the `ETag` identifier, as:

```text
"4960408E160450EAE42D83507EB23730"   – A strong ETag validator
W/"4960408E160450EAE42D83507EB23730" – A weak ETag validator
```

A strongly validating `ETag` match indicates that the content of the two resource representations is byte-for-byte identical and that all other entity fields (such as Content-Language) are also unchanged. Strong `ETag`s permit the caching and reassembly of partial responses, as with byte-range requests.

A weakly validating `ETag` match only indicates that the two representations are semantically equivalent, meaning that for practical purposes, they are interchangeable and that cached copies can be used. However, the resource representations are not necessarily byte-for-byte identical, and thus weak `ETag`s are unsuitable for byte-range requests. Weak `ETag`s may be useful for cases in which strong `ETag`s are impractical for a Web server to generate, such as with dynamically generated content.

### Cache-Control

> Source: [MDN Cache-Control Docs](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Headers/Cache-Control)

Cache Control can be configured in request & response, the table below show the supported directives for request and response.

Here are the supported directives for request & respond:

| Request        | Response               |
| -------------- | ---------------------- |
| max-age        | max-age                |
| max-stale      | -                      |
| min-fresh      | -                      |
| -              | s-maxage               |
| no-cache       | no-cache               |
| no-store       | no-store               |
| no-transform   | no-transform           |
| only-if-cached | -                      |
| -              | must-revalidate        |
| -              | proxy-revalidate       |
| -              | must-understand        |
| -              | private                |
| -              | public                 |
| -              | immutable              |
| -              | stale-while-revalidate |
| stale-if-error | stale-if-error         |

for different `Cache-Control` have different logic for browser and load balancer, here is a brief summary for different header

| Param                     | Description                                                                                        | browser                           | CDN                               |
| ------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------- | --------------------------------- |
| `public`                  | resource can be cache anywhere(including shared for different users)                               | cache                             | cache                             |
| `private`                 | can be cached for single user                                                                      | cache                             | no-cache                          |
| `no-cache`                | should revalidate each request to server(e.g. through `Etag` header)                               | cache(need-revalidate)            | cache(need-revalidate)            |
| `no-store`                | store nothing neither browser or CDN can cache response                                            | no-cache                          | no-cache                          |
| `stale-while-revalidate`= | cache can be used in certain time range if revalidate request in the background                    | cache(refetch asynchronous)       | cache(refetch asynchronous)       |
| `stale-if-error`          | cache can reuse a cached response when the server responds with an error                           | cache(refetch when request error) | cache(refetch when request error) |
| `must-revalidate`         | cache can reuse a cached response, must revalidate request in the background once cache is outated | cache(refetch asynchronous)       | cache(refetch asynchronous)       |
| `proxy-revalidate`        | same as `must-revalidate`, but only for proxy servers                                              | /                                 | cache(refetch asynchronous)       |
| `immutable`               | resource will not change, will not revalidate the request                                          | cache (will not request again)    | cache                             |

#### Cache-Control: public

Lets deep dive in few of them, first take `public` for an example:
<blog-image src="/img/blog/cache-policy-for-online-traffic/cache-control-public.svg" support-dark-mode full-screen></blog-image>

`public` means resources can be cached anywhere(including shared for different users). So as diagram shows above if two different browsers(users) access the same resource. As the first one access the resource with `public` inside the `Cache-Control` header, the resource will be cached in both load balancer and browser. Then as the second one access the resource, the load balancer will directly respond to the request with cached resource content(`index.html` in this example), because `public` means the resource can be cached anywhere, including shared cache for different browsers(users).
lz

#### Cache-Control: private

`private` means that all or part of the response message is intended for a single browser(user) and **MUST NOT** be cached by a shared cache, such as a proxy server. So in our example, if two different browsers(users) access the same resource, the load balancer will not cache the resource content. Still, the browser will cache the resource content(via [Etag](#http-etag) method).

<blog-image src="/img/blog/cache-policy-for-online-traffic/cache-control-private.svg" support-dark-mode full-screen></blog-image>

As digram above, the main difference between `public` and `private` is that `private` will not cache the resource content inside load balancer(or cached for different browsers(users) rather than shared cache), but `public` will cache the same resource for different browsers(users).

### Service Worker(JavaScript)

Service Worker is a very powerful tool for developers to control cache policy for their web pages through JavaScript codes. The service worker file runs in the background of a web page. It is used to cache resources and respond to fetch events, which is very different from the previous 2 cache solution.

I'll only briefly introduce the service because the service workers are defined by the website developer rather than the hosting platform. And the service worker itself can not just control the cache policy for the web page. It also can control the web page's behavior (like receiving geolocation updates, background data synchronization, etc.).

As for cache, you can regard service worker implements a proxy for all of the requests inside your website. So the service worker can cache the resources and respond to the requests.

## Design the cache policy for [let.sh](https://let.sh)

### Route based cache policy

```bash
git ls-files | tree --fromfile
.
├── asset-manifest.json
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
├── precache-manifest.c0a7361b86cadc203094cedbf871e8b1.js
├── robots.txt
├── service-worker.js
└── static
    ├── css
    │   ├── main.d1b05096.chunk.css
    │   └── main.d1b05096.chunk.css.map
    ├── js
    │   ├── 2.d9fa3a5e.chunk.js
    │   ├── 2.d9fa3a5e.chunk.js.LICENSE.txt
    │   ├── 2.d9fa3a5e.chunk.js.map
    │   ├── main.5d21aa1a.chunk.js
    │   ├── main.5d21aa1a.chunk.js.map
    │   ├── runtime-main.e9912549.js
    │   └── runtime-main.e9912549.js.map
    └── media
        └── logo.5d5d9eef.svg

4 directories, 19 files

```

### File Type based cache policy

## Reference

> let.sh: [let.sh](https://let.sh)<br/>
> Etag: <https://developer.mozilla.org/docs/Web/HTTP/Headers/ETag><br/>
> Cache-Control: <https://developer.mozilla.org/docs/Web/HTTP/Headers/Cache-Control><br/>
> Service Worker: <https://developer.mozilla.org/docs/Web/API/Service_Worker_API>
