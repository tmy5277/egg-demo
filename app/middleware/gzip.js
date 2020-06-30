const isJSON = require('koa-is-json');
const zlib = require('zlib');

module.exports = (options, app) => {
  return async function gzipTest(ctx, next) {
    await next();
    
    let body = ctx.body;
    if (!body || (options.minSize && ctx.length < options.minSize)) return;


    if (isJSON(body)) body = JSON.stringify(body);

    // 设置 gzip body，修正响应头
    const stream = zlib.createGzip();
    stream.end(body);
    ctx.body = stream;
  }
}