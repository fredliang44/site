---
title: 'Cache policy for online traffic'
date: 2022-07-03T18:02:04+08:00
description: 'Design the cache header policy for online traffic for let.sh'
draft: false
tags: ['let.sh', 'Load Balancer']
image: '/img/blog/cache-policy-for-online-traffic/cover.jpg'
---

## How cache works among browser, cdn and server

<blog-image src="/img/blog/cache-policy-for-online-traffic/first-time-access.svg" support-dark-mode full-screen></blog-image>

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
