/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-27 11:41:24
 * @LastEditTime: 2018-11-29 10:52:28
 */
const poetry = require('koa-router')()
const PoetryController = require('../../controllers/poetry')
const FormatResponse = require('../../utils/format-response')
const MappingCode = require('../../utils/mapping-code')
const Message = require('../../utils/message')
const Joi = require('joi')
/**
 * @description 随机推荐接口
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
poetry.get('/fetch', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      size: Joi.number().integer().default(1)
    })
    let { size } = ctx.request.query
    await Joi.validate({
      size
    }, schema)
    let result = await PoetryController.promotePoetry(ctx, next)
    ctx.body = FormatResponse.success(result, Message.FETCH_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.POETRY).find(item => {
        return error.message.includes(MappingCode.POETRY[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.POETRY[code])
      } else {
        ctx.body = FormatResponse.error(error)
      }
    }
  } finally {
    next()
  }
})

poetry.get('/fetch/author', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      rank: Joi.number().integer().default(1)
    })
    let { rank } = ctx.request.query
    await Joi.validate({
      rank
    }, schema)
    let result = await PoetryController.getAuthorByPoetry(ctx, next)
    ctx.body = FormatResponse.success(result, Message.FETCH_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.POETRY).find(item => {
        return error.message.includes(MappingCode.POETRY[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.POETRY[code])
      } else {
        ctx.body = FormatResponse.error(error)
      }
    }
  } finally {
    next()
  }
})

poetry.get('/fetch/poetry/:id', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      id: Joi.string().required().regex(/[/W/w0-9_]/)
    })
    let { id } = ctx.params
    await Joi.validate({
      id
    }, schema)
    let result = await PoetryController.findPoetryById(ctx, next)
    ctx.body = FormatResponse.success(result, Message.FETCH_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.POETRY).find(item => {
        return error.message.includes(MappingCode.POETRY[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.POETRY[code])
      } else {
        ctx.body = FormatResponse.error(error)
      }
    }
  } finally {
    next()
  }
})

poetry.get('/fetch/like', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      like: Joi.string(),
      pageSize: Joi.number(),
      currentPage: Joi.number()
    })
    let {
      like,
      pageSize,
      currentPage
    } = ctx.params
    await Joi.validate({
      like,
      pageSize,
      currentPage
    }, schema)
    let result = await PoetryController.findPoetry(ctx, next)
    ctx.body = FormatResponse.success(result, Message.FETCH_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.POETRY).find(item => {
        return error.message.includes(MappingCode.POETRY[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.POETRY[code])
      } else {
        ctx.body = FormatResponse.error(error)
      }
    }
  }
})

module.exports = poetry
