import Koa from "koa"
import {KoaWebC} from "koa-webc"

const app = new Koa()
app.use(KoaWebC({data: {xpto: "buzz"}}))

app.use(async ctx => ctx.render("extra-data.webc", {
  data: {
    foo: "bar",
    xpto: "woof"
  }
}))

app.listen(3000)
console.log("http://localhost:3000")
