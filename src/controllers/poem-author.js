/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-29 15:42:17
 * @LastEditTime: 2018-11-29 15:45:16
 */
const PoemAuthorService = require('../services/poem-author')
/**
 * @description 模糊查询
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.findAuthor = async (ctx, next) => {
  let result = null
  try {
    let {
      name,
      pageSize = 10,
      currentPage = 1
    } = ctx.request.query
    pageSize = parseInt(pageSize)
    currentPage = parseInt(currentPage)
    result = PoemAuthorService.findAuthor({
      name,
      pageSize,
      currentPage
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
/**
 * @description id 查询
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.findAuthorById = async (ctx, next) => {
  let result = null
  let {
    id
  } = ctx.params
  try {
    result = PoemAuthorService.findAuthorById({
      id
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}