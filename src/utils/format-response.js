/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 格式化请求返回
 * @Date: 2018-11-21 15:21:18
 * @LastEditTime: 2018-11-22 16:30:53
 */
exports.success = (data = {}, message, code = 0) => {
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