import Koa from "koa"
import { KoaWebC } from "koa-webc"

const app = new Koa()
app.use(KoaWebC())

app.use(async ctx => ctx.render("hello-world.webc"))

app.listen(3000)
console.log("http://localhost:3000")
