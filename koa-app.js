const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const Router = require('koa-router');
const fs = require('fs');
const router = new Router();
router.get('/', async (ctx) => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./index.html');
  });
  
app.use(serve('joychash'));
// router.use('/joychash', serve('./joychash'));
app.use(router.routes());
app.listen(3000);