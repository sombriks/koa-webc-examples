const Koa = require("koa")
const { KoaWebC } = require("koa-webc")

const app = new Koa()
app.use(KoaWebC({ bundle: true }))

app.use(async ctx => ctx.render("my-counter.webc"))

app.listen(3000)
console.log("http://localhost:3000")
