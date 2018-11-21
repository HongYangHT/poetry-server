/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 用户
 * @Date: 2018-11-14 17:43:57
 * @LastEditTime: 2018-11-21 18:27:00
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
    pageSize: Joi.number().integer(),
    currentPage: Joi.number().integer()
  })
  let { currentPage = 1, pageSize = 10, name = '' } = ctx.request.query
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
