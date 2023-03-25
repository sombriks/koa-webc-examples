import Koa from "koa"
import {KoaWebC} from "koa-webc"

const app = new Koa()
app.use(KoaWebC({data: {xpto: "buzz"}}))

app.use(async ctx => ctx.render("sample-loop.webc", {
  data: {
    colors:["red","green","blue"]
  }
}))

app.listen(3000)
console.log("http://localhost:3000")
