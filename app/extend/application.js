module.exports = {
  // 解构后直接调用函数获取的this为全局node对象，需要明确调用对象，如app.responseHandler
  apiResponseHandler(err = null, data = {}) {
    let returnJson = err ? this.apiErrorHandler(err, data) : this.apiSuccessHandler(data);
    console.log('debug returnJson', returnJson)
    return returnJson;
  },
  apiSuccessHandler(data = {}) {
    let { responseCode } = this.config;
    return {
      code: responseCode.success,
      msg: 'success',
      data
    }
  },
  apiErrorHandler(err = {}, data = {}) {
    let { responseCode } = this.config;
    if (err instanceof Array) {
      // validate
      return {
        code: responseCode[err[0].code] || responseCode.common,
        msg: err[0].message || 'parameter validate error',
        data: {}
      }
    } else if (typeof (err) === 'string') {
      return {
        code: responseCode.common,
        msg: err,
        data: {}
      }
    } else {
      return {
        code: err.code || responseCode.common,
        msg: err.message || err.msg || 'unknown error',
        data: {}
      }
    }
  }
};