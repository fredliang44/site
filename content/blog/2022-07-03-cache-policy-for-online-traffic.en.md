---
title: 'Cache policy for online traffic'
date: 2022-07-03T18:02:04+08:00
description: 'Design the cache header policy for online traffic for let.sh'
draft: false
tags: ['let.sh', 'Load Balancer']
image: '/img/blog/cache-policy-for-online-traffic/cover.jpg'
---

## 1. How cache works among browser, CDN, and server

I'm working on [let.sh](https://let.sh) load balancer recently, and to provide the best performance and reduce the costs for frontend and backend projects, I've dug a lot of documentation and materials to design the cache policy of let.sh for online traffic.

<blog-image src="/img/blog/cache-policy-for-online-traffic/first-time-access.svg" support-dark-mode full-screen></blog-image>

Take let.sh for an example(as shown in the image above). When you first visit the site hosted on let.sh, the browser will send a request to let.sh load balancer. Then let.sh route the request to the server to get the raw file(sure the file has been compressed) and bypass the browser through the load balancer.

If you dig into the details of the image, you can see let.sh server responds to the request with a header `cache-control: no-cache`, which means the server is not allowing the load-balancer and browser to cache the response. The reason why the server not allowing upstream to cache the response, is beacuse this is an request for index.html which might be changed in the future. Another reason for this is let.sh want to provide an intant experience for developers when they publish their websites/apps online. One clicks to deploy, refresh to see the results.

So it seems not cache anyting right? There is still 2 ways to cache the response: for files(like `/index.html`) likely to be changed in the future, I will introduce `Etag` header first. As the files not likely to be changed in the future, I will introduce `Cache-Control` header next.

### 1.1 HTTP Etag

Now the problem we are facing for the files like `/index.html` is the file might be changed in the future, and the payload for the requests might be large. We can't reduce the requests because we have to letting browser check whether the file have been updated. So what about reducing the size of the payload?

Here it comes to the `Etag` header. The `Etag` (or entity tag) HTTP response header is an identifier for a specific version of a resource, like the unique id for each file. Once the file have been updated, the file will be changed also.

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

A weakly validating `ETag` match only indicates that the two representations are semantically equivalent, meaning that for practical purposes they are interchangeable and that cached copies can be used. However, the resource representations are not necessarily byte-for-byte identical, and thus weak `ETag`s are not suitable for byte-range requests. Weak `ETag`s may be useful for cases in which strong `ETag`s are impractical for a Web server to generate, such as with dynamically generated content.

### 1.2 Cache-Control

#### test

#### asdas

> Source: [MDN Cache-Control Docs](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Headers/Cache-Control)

Cache Control can be configured in request & response, the table below show the supported directives for request and response.

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

| Param      | Description                               |
| ---------- | ----------------------------------------- |
| `public`   | Cache the response for `public` (default) |
| `private`  | Cache the response for `private`          |
| `no-cache` | Cache the response for `no-cache`         |

## Design the cache policy for [let.sh](https://let.sh)