module.exports = {
  // 解构后直接调用函数获取的this为全局node对象，需要明确调用对象，如app.responseHandler
  apiResponseHandler(err = null, data = {}) {
    if (err) {
      let { errorCode } = this.config
      if (err instanceof Array) {
        // validate
        return {
          code: errorCode[err[0].code] || errorCode.common,
          msg: err[0].message || 'parameter validate error',
          data: {}
        }
      } else if (typeof(err) === 'string') {
        return {
          code: errorCode.common,
          msg: err,
          data: {}
        }
      } else {
        return {
          code: err.code || errorCode.common,
          msg: err.message || err.msg || 'unknown error',
          data: {}
        }
      }
    } else {
      return {
        code: 0,
        msg: 'success',
        data
      }
    }
  }
};