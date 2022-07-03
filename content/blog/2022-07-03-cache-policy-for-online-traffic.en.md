---
title: 'Cache policy for online traffic'
date: 2022-07-03T18:02:04+08:00
description: 'Design the cache header policy for online traffic for let.sh'
draft: false
tags: ['let.sh', 'Load Balancer']
image: '/img/blog/cache-policy-for-online-traffic/cover.jpg'
---

## How cache works among browser, cdn and server

I'm working on [let.sh](https://let.sh) load balancer recently, and in order to provide the best performance and reduce the costs for frontend and backend projects, I've digged a lot of docuemntation and materials to design the cache policy of let.sh for online traffic.

<blog-image src="/img/blog/cache-policy-for-online-traffic/first-time-access.svg" support-dark-mode full-screen></blog-image>

Take let.sh for example(as image above), when you first visited the site hosted on let.sh, the browser will send a request to let.sh load balancer. Then let.sh will route the request to server to get the raw file(sure the file have been compressed) and bypass to the browser through the load balancer.

If you dig in to the details of the image, you can see let.sh server response the request with a header `cache-control: no-cache`, which the server not allowing the load-balancer and browser to cache the response. The rease why server not allowing upstream to cache the response is that this is an request for index.html, and this html might be changed in the future. Another reason for this is let.sh want to provide intant experience for developers when they publishing their websites/apps online. One click to deploy, refresh to see the results.

So it seems not cache anyting right? There is still 2 ways to cache the response: for files(like `/index.html`) likely to be changed in the future, I will introduce `Etag` header first. As the files not likely to be changed in the future, I will introduce `Cache-Control` header next.

## HTTP Etag

Now the problem we are facing for the files like `/index.html` is the file might be changed in the future, and the payload for the requests might be large. We can't reduce the requests because we have to letting browser check whether the file have been updated. So what about reducing the size of the payload?

Here it comes to the `Etag` header. The `Etag` (or entity tag) HTTP response header is an identifier for a specific version of a resource, like the unique id for each file. Once the file have been updated, the file will be changed also.

<blog-image src="/img/blog/cache-policy-for-online-traffic/etag.svg" support-dark-mode full-screen></blog-image>

For the first time user access `/index.html`, the server will response `index.html` file along with header `etag`. The browser will store the `etag` in the cache, and then the next time the user access the same file, the browser will send a request to the server with the `if-none-match` header. The server will compare the `if-none-match` with the etag of the latest file, if the `etag` is the same, the server will return empty body with `status code` 304 and header `etag`.

## The W3C standard for cache headers (Cache-Control)

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
