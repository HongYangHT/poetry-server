/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description:
 * @Date: 2018-11-29 17:13:55
 * @LastEditTime: 2019-01-14 09:43:56
 */
const LunYuService = require('../services/lunyu')
/**
 * @description 论语推荐
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.premoteLunYu = async (ctx, next) => {
  let result = null
  let { size = 5 } = ctx.request.query
  size = parseInt(size)
  try {
    result = await LunYuService.promoteLunYu({
      size
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
/**
 * @description 根据id查询
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.getLunYuById = async (ctx, next) => {
  let result = null
  let { id } = ctx.params
  try {
    result = await LunYuService.getLunYuById({ id })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
