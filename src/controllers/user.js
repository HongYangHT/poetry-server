/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 用户
 * @Date: 2018-11-14 17:43:57
 * @LastEditTime: 2018-11-22 18:01:47
 */
const UserServices = require('../services/user')
const Joi = require('joi')

/**
 * @description 查询用户信息
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.getUsers = async (ctx, next) => {
  let result = null
  const schema = Joi.object().keys({
    name: Joi.string(),
    pageSize: Joi.number().integer(),
    currentPage: Joi.number().integer()
  })
  let {
    currentPage = 1, pageSize = 10, name = ''
  } = ctx.request.query
  Joi.validate({
    pageSize,
    currentPage
  }, schema, (err, value) => {
    if (err) {
      ctx.status = 401
      throw new Error(err)
    }
  })
  currentPage = parseInt(currentPage)
  pageSize = parseInt(pageSize)
  try {
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
  const schema = Joi.object().keys({
    name: Joi.string().required().regex(/(^1[378][0-9]\d{8}|^15[89]\d{8})|(^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$)/),
    password: Joi.string().required().min(6).max(20)
  })
  let { name, password } = ctx.request.body
  Joi.validate({
    name,
    password
  }, schema, (err, value) => {
    if (err) {
      ctx.status = 401
      throw new Error(err)
    }
  })
  try {
    result = await UserServices.createUser({
      name,
      password
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}