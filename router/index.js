const router = require('koa-router')

router.get('/', async (ctx, next) => { 
  ctx.body = 'hello'
})

module.exports = router