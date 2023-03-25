const Koa = require("koa")
const {KoaWebC} = require("koa-webc")

const app = new Koa()

app.use(KoaWebC({
  defineComponents: "views/globals/*.webc",
  data: {
    friends: [
      {name: "Joe"},
      {name: "Monica"},
      {name: "Chandler"},
      {name: "Rachel"},
      {name: "Phoebe"},
      {name: "Ross"}
    ]
  }
}))

app.use(async ctx => ctx.render("my-agenda.webc"))

app.listen(3000)
console.log("http://localhost:3000")
