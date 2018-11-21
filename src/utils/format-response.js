/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 格式化请求返回
 * @Date: 2018-11-21 15:21:18
 * @LastEditTime: 2018-11-21 15:36:33
 */
exports.success = (data = {},
  code = 0, message) => {
  return {
    code,
    message,
    data
  }
}

exports.error = (error) => {
  const message = error.errmsg || error.message || error
  return {
    code: -1,
    message,
    data: {}
  }
}