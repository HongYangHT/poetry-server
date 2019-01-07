/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 格式化请求返回
 * @Date: 2018-11-21 15:21:18
 * @LastEditTime: 2019-01-07 14:46:13
 */
exports.success = (data = {}, message, code = 0) => {
  return {
    code,
    message,
    data
  }
}

exports.error = (error, code) => {
  const message = error.errmsg || error.message || error
  return {
    code,
    message,
    data: {}
  }
}