/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-29 15:06:37
 * @LastEditTime: 2018-11-29 15:22:29
 */
const poetryAuthor = require('koa-router')()
const MappingCode = require('../../utils/mapping-code')
const Message = require('../../utils/message')
const Joi = require('joi')
const FormatResponse = require('../../utils/format-response')
const PoetryAuthorController = require('../../controllers/poetry-author')

/**
 * @description 模糊查询
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
poetryAuthor.get('/fetch', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      name: Joi.string(),
      pageSize: Joi.number().default(10),
      currentPager: Joi.number().default(1)
    })
    let {
      name,
      pageSize,
      currentPager
    } = ctx.request.query
    await Joi.validate({
      name,
      pageSize,
      currentPager
    }, schema)
    let result = await PoetryAuthorController.findAuthor(ctx, next)
    ctx.body = FormatResponse.success(result, Message.FETCH_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.POETRYAUTHOR).find(item => {
        return error.message.includes(MappingCode.POETRYAUTHOR[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.POETRYAUTHOR[code])
      } else {
        ctx.body = FormatResponse.error(error)
      }
    }
  } finally {
    next()
  }
})
/**
 * @description 根据id查询
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
poetryAuthor.get('/fetch/:id', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      id: Joi.string().required()
    })
    let {
      id
    } = ctx.params
    await Joi.validate({
      id
    }, schema)
    let result = await PoetryAuthorController.findAuthorById(ctx, next)
    ctx.body = FormatResponse.success(result, Message.FETCH_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.POETRYAUTHOR).find(item => {
        return error.message.includes(MappingCode.POETRYAUTHOR[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.POETRYAUTHOR[code])
      } else {
        ctx.body = FormatResponse.error(error)
      }
    }
  } finally {
    next()
  }
})

module.exports = poetryAuthor
