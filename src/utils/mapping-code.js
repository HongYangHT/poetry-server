/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 服务调用返回code mapping
 * @Date: 2018-11-22 16:17:02
 * @LastEditTime: 2019-01-14 09:43:04
 */

module.exports = {
  'USER': {
    'EXIST': 100000, // 用户已存在
    'NOT_EXIST': 200000, // 用户不存在
    'PASSWORD_WRONG': 200001 // 用户密码错误
  },
  'POETRY': {
    'NOT_EXIST': 200002 // 诗歌不存在
  },
  'POEM': {
    'NOT_EXIST': 200003 // 词不存在
  },
  'POETRYAUTHOR': {
    'NOT_EXIST': 200004 // 诗人不存在
  },
  'POEMAUTHOR': {
    'NOT_EXIST': 200005 // 词人不存在
  },
  'LUNYU': {
    'NOT_EXIST': 200006 // 内容不存在
  },
  'SHIJING': {
    'NOT_EXIST': 200007 // 内容不存在
  },
  name: {
    'string.regex.base': 100001, // 用户名非法，不是使用邮箱或者手机号码
    'any.empty': 100002 // 用户名为空
  },
  password: {
    'string.min': 100011, // 用户密码非法， 长度不在6-20以内, 密码小于6个字符
    'string.max': 100012, // 用户密码非法， 长度不在6-20以内, 密码大于20个字符
    'any.empty': 100013 // 密码为空
  },
  id: {
    'any.empty': 100021 // 传入参数为空
  },
  size: {
    'number.base': 100014 // 不是数字
  },
  rank: {
    'number.base': 100015 // 不是数字
  },
  pageSize: {
    'number.base': 100016 // 不是数字
  },
  currentPage: {
    'number.base': 100017 // 不是数字
  }
}
