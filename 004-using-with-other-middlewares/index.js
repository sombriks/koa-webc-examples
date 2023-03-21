import Koa from "koa"
import {KoaWebC} from "koa-webc"
import bodyParser from "koa-bodyparser"
import koaSession from "koa-session"
import Router from "@koa/router"

const app = new Koa()
const router = new Router()

router.get("/", async ctx => {
  await ctx.render("guess.webc")
})

router.post("/result", async ctx => {
  ctx.session.guesses = ctx.session.guesses || []
  ctx.session.guesses.push(ctx.request.body)
  console.log(ctx.request.body)
  await ctx.render("result.webc")
})

// mind the middleware order registration
app
  .use(koaSession({signed: false}, app))
  .use(KoaWebC())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)

console.log("http://localhost:3000")
