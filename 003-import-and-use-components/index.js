import Koa from "koa"
import { KoaWebC } from "koa-webc"

const app = new Koa()
app.use(KoaWebC({ viewPath: "pages" }))

app.use(async ctx => ctx.render("main.webc"))

app.listen(3000)
console.log("http://localhost:3000")
