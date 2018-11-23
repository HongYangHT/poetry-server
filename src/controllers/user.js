/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 用户
 * @Date: 2018-11-14 17:43:57
 * @LastEditTime: 2018-11-23 16:19:03
 */
const UserServices = require('../services/user')

/**
 * @description 查询用户信息
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.getUsers = async (ctx, next) => {
  let result = null
  try {
    let {
      currentPage = 1, pageSize = 10, name = ''
    } = ctx.request.query
    currentPage = parseInt(currentPage)
    pageSize = parseInt(pageSize)
    result = await UserServices.getUsers({
      currentPage,
      pageSize,
      name
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}

/**
 * @description 用户注册
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.signIn = async (ctx, next) => {
  let result = null
  try {
    let {
      name,
      password
    } = ctx.request.body
    result = await UserServices.createUser({
      name,
      password
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
/**
 * @description 登录
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.login = async (ctx, next) => {
  let result = null
  try {
    let {
      name,
      password
    } = ctx.request.body
    result = await UserServices.login({
      name,
      password
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
/**
 * @description 查询某个用户的详细信息
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.fetchUser = async (ctx, next) => {
  let result = null
  try {
    let { id } = ctx.params
    result = await UserServices.getUserById({ id })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
