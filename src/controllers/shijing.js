/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-29 17:19:33
 * @LastEditTime: 2018-11-29 17:21:45
 */
const ShiJingService = require('../services/shijing')
/**
 * @description 诗经推荐
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.premoteShiJing = async (ctx, next) => {
  let result = null
  let {
    size = 5
  } = ctx.request.query
  size = parseInt(size)
  try {
    result = await ShiJingService.premoteShiJing({
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
exports.getShiJingById = async (ctx, next) => {
  let result = null
  let {
    id
  } = ctx.params
  try {
    result = await ShiJingService.getShiJingById({
      id
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}