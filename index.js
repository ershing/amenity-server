const Koa = require('koa')
const app = new Koa()
const router = require('./router')


app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(router.routes())

app.listen(3800)

console.log('server on 3800...')