//初始化log文件目录
const initLogPath = require('./init').initLogPath
initLogPath()

const config = require('./config')
const Koa = require('koa')
const convert = require('koa-convert');
const json = require('koa-json');

const app = new Koa()
// const router = require('./router')

//middleware
app.use(convert(json()));


//log工具
const logUtil = require('./utils/log_util');

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  var ms;
  try {
    await next();
    ms = new Date() - start;
    logUtil.logResponse(ctx, ms);
  } catch (error) {
    ms = new Date() - start;
    logUtil.logError(ctx, error, ms);
  }
});

// app.use(router.routes())

app.listen(config.port)

console.log(`server on ${config.port}...`)