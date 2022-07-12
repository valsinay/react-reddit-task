const koa = require('koa')
const app = new koa()
app.use(async ctx =>(ctx.body="Hello everyone!!!!"));
// app.listen(4000);

app.listen(4000, () => {console.log('Server running at PORT 2400')})