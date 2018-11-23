/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-14 16:15:13
 * @LastEditTime: 2018-11-23 16:24:37
 */
const user = require('koa-router')()
const UserController = require('../../controllers/user')
const FormatResponse = require('../../utils/format-response')
const MappingCode = require('../../utils/mapping-code')
const Message = require('../../utils/message')
const Joi = require('joi')

/**
 * @description 查询用户
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
user.get('/user', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      name: Joi.string().allow(''),
      pageSize: Joi.number().integer().default(10),
      currentPage: Joi.number().integer().default(1)
    })
    let {
      currentPage = 1, pageSize = 10, name = ''
    } = ctx.request.query
    await Joi.validate({
      name,
      pageSize,
      currentPage
    }, schema)

    let result = await UserController.getUsers(ctx, next)
    ctx.body = FormatResponse.success(result, Message.FETCH_SUCCESS)
  } catch (error) {
    ctx.body = FormatResponse.error(error)
  } finally {
    next()
  }
})

/**
 * @description 注册用户
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
user.post('/signin', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      name: Joi.string()
        .required()
        .regex(/(^1[378][0-9]\d{8}|^15[89]\d{8})|(^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$)/),
      password: Joi.string()
        .required()
        .min(6)
        .max(20)
    })

    let {
      name,
      password
    } = ctx.request.body

    await Joi.validate({
      name,
      password
    }, schema)

    let result = await UserController.signIn(ctx, next)
    ctx.body = FormatResponse.success(result, Message.SIGN_IN_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.USER).find(item => {
        return error.message.includes(MappingCode.USER[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.USER[code])
      } else {
        ctx.body = FormatResponse.error(error)
      }
    }
  } finally {
    next()
  }
})

/**
 * @description 用户登录
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
user.post('/login', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      name: Joi.string()
        .required()
        .regex(/(^1[378][0-9]\d{8}|^15[89]\d{8})|(^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$)/),
      password: Joi.string()
        .required()
        .min(6)
        .max(20)
    })
  
    let {
      name,
      password
    } = ctx.request.body
  
    await Joi.validate({
      name,
      password
    }, schema)
    let result = await UserController.login(ctx, next)
    ctx.body = FormatResponse.success(result, Message.LOGIN_IN_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.USER).find(item => {
        return error.message.includes(MappingCode.USER[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.USER[code])
      } else {
        ctx.body = FormatResponse.error(error)
      }
    }
  } finally {
    next()
  }
})

/**
 * @description 查询用户信息
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
user.get('/fetch/:id', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      id: Joi.string().required()
    })
    let { id } = ctx.params
    await Joi.validate({
      id
    }, schema)
    let result = await UserController.fetchUser(ctx, next)
    ctx.body = FormatResponse.success(result, Message.FETCH_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.USER).find(item => {
        return error.message.includes(MappingCode.USER[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.USER[code])
      } else {
        ctx.body = FormatResponse.error(error)
      }
    }
  }
})

module.exports = user
