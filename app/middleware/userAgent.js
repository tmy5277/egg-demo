const userAgentPkg = require('koa-useragent')

module.exports = (options, app) => {
  let _userAgent = function(ctx, next) {
    return userAgentPkg.userAgent(ctx, next)
  } 
  return _userAgent;
};