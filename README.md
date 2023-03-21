# koa-webc-examples

Samples of [koa-webc middleware](https://github.com/sombriks/koa-webc)

## [001-hello-world](001-hello-world)

Basic usage of this Koa-WebC middleware

## [002-counter-button](002-counter-button)

Sampling how WebC scopes styles, scripts and provides a uid attribute to keep
unique id's inside a component

## [003-import-and-use-components](003-import-and-use-components)

How to import one component inside another, so you can modularize your templates

## [004-using-with-other-middlewares](004-using-with-other-middlewares)

Combining several Koa middlewares into the same project, so you get all the nice
stuff from [Koa ecosystem](https://github.com/koajs/koa/wiki) 

## [005-pass-custom-data](005-pass-custom-data)

Every WebC template gets injected with Koa context from the handler, you have to
do nothing

However, in order to offer a more clean way to feed your templates with data,
you can pass extra data to it when defining the middleware and also when calling
ctx.render()