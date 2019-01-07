/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-29 17:22:13
 * @LastEditTime: 2018-11-29 17:34:18
 */
const lunYu = require('koa-router')()
const FormatResponse = require('../../utils/format-response')
const MappingCode = require('../../utils/mapping-code')
const Message = require('../../utils/message')
const Joi = require('joi')
const LunYuController = require('../../controllers/lunyu')

/**
 * @description 论语推荐
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
lunYu.get('/fetch', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      size: Joi.number().default(1)
    })
    let { size } = ctx.request.query
    await Joi.validate({
      size
    }, schema)
    let result = await LunYuController.premoteLunYu(ctx, next)
    ctx.body = FormatResponse.success(result, Message.FETCH_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.LUNYU).find(item => {
        return error.message.includes(MappingCode.LUNYU[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.LUNYU[code])
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
lunYu.get('/fetch/:id', async (ctx, next) => {
  try {
    const schema = Joi.object().keys({
      id: Joi.string().required()
    })
    let { id } = ctx.params
    await Joi.validate({
      id
    }, schema)
    let result = await LunYuController.getLunYuById(ctx, next)
    ctx.body = FormatResponse.success(result, Message.FETCH_SUCCESS)
  } catch (error) {
    ctx.status = 400
    if (error.details && error.details.length && error.details[0].path && error.details[0].path.length) {
      let type = error.details[0].type
      let path = error.details[0].path[0]
      ctx.body = FormatResponse.error(error, MappingCode[path][type])
    } else {
      let code = null
      code = Object.keys(MappingCode.LUNYU).find(item => {
        return error.message.includes(MappingCode.LUNYU[item])
      })
      if (code) {
        ctx.body = FormatResponse.error(error, MappingCode.LUNYU[code])
      } else {
        ctx.body = FormatResponse.error(error)
      }
    }
  }
})

module.exports = lunYu
