const shiJing = require('koa-router')()
const FormatResponse = require('../../utils/format-response')
const MappingCode = require('../../utils/mapping-code')
const Message = require('../../utils/message')
const Joi = require('joi')
const ShiJingController = require('../../controllers/shijing')

/**
 * @description 论语推荐
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
shiJing.get('/fetch', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      size: Joi.number().default(1)
    })
    let {
      size
    } = ctx.request.query
    await Joi.validate({
      size
    }, schema)
    let result = await ShiJingController.premoteShiJing(ctx, next)
    ctx.body = FormatResponse.success(result, Message.FETCH_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.SHIJING).find(item => {
        return error.message.includes(MappingCode.SHIJING[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.SHIJING[code])
      } else {
        ctx.body = FormatResponse.error(error)
      }
    }
  }
})

/**
 * @description 根据id查询
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
shiJing.get('/fetch/:id', async (ctx, next) => {
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
    let result = await ShiJingController.getShiJingById(ctx, next)
    ctx.body = FormatResponse.success(result, Message.FETCH_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.SHIJING).find(item => {
        return error.message.includes(MappingCode.SHIJING[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.SHIJING[code])
      } else {
        ctx.body = FormatResponse.error(error)
      }
    }
  }
})

module.exports = shiJing
