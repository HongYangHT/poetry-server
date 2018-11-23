/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 服务调用返回code mapping
 * @Date: 2018-11-22 16:17:02
 * @LastEditTime: 2018-11-23 16:25:25
 */

module.exports = {
  USER: {
    ['EXIST']: 100000, // 用户已存在
    ['NOT_EXIST']: 200000, // 用户不存在
    ['PASSWORD_WRONG']: 200001 // 用户密码错误
  },
  name: {
    ['string.regex.base']: 100001, // 用户名非法，不是使用邮箱或者手机号码
    ['any.empty']: 100002 // 用户名为空
  },
  password: {
    ['string.min']: 100011, // 用户密码非法， 长度不在6-20以内, 密码小于6个字符
    ['string.max']: 100012, // 用户密码非法， 长度不在6-20以内, 密码大于20个字符
    ['any.empty']: 100013 // 密码为空
  },
  id: {
    ['any.empty']: 100021 // 传入参数为空
  }
}
