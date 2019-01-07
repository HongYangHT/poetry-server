/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-28 09:53:18
 * @LastEditTime: 2018-11-29 15:23:43
 */
const PoetryAuthorService = require('../services/poetry-author')
/**
 * @description 模糊查询
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.findAuthor = async (ctx, next) => {
  let result = null
  try {
    let { name, pageSize = 10, currentPage = 1 } = ctx.request.query
    pageSize = parseInt(pageSize)
    currentPage = parseInt(currentPage)
    result = PoetryAuthorService.findAuthor({
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
  let { id } = ctx.params
  try {
    result = PoetryAuthorService.findAuthorById({ id })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
