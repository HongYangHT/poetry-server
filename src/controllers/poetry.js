/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-27 11:36:03
 * @LastEditTime: 2018-11-29 10:48:13
 */
const PoetryService = require('../services/poetry')
const PoetryAuthorService = require('../services/poetry-author')
const { sortBy } = require('lodash')
/**
 * @description 获取推荐
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.promotePoetry = async (ctx, next) => {
  let result = null
  try {
    let { size = 1 } = ctx.request.query
    size = parseInt(size)
    result = await PoetryService.promotePoetry({ size })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
/**
 * @description 查询诗词最多的诗人
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.getAuthorByPoetry  = async (ctx, next) => {
  let result = null
  try {
    let { rank = 6 } = ctx.request.query
    rank = parseInt(rank)
    let poetries = await PoetryService.getAuthorByPoetry({
      rank
    })
    let ids = poetries.map(item => {
      return item.poetry_author_id
    })
    let authors = await PoetryAuthorService.fetchAuthorByIds({ ids })
    result = authors.map(item => {
      let n = item
      poetries.forEach(poetry => {
        if (poetry.poetry_author_id === item.id) {
          n.total = poetry.total
        }
      })
      return n
    })
    result = sortBy(result, (o) => -o.total)
  } catch (error) {
    throw new Error(error)
  }
  return result
}

/**
 * @description 根据id查询诗歌
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.findPoetryById = async (ctx, next) => {
  let result = null
  try {
    let { id } = ctx.params
    result = await PoetryService.findPoetryById({ id })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
/**
 * @description 模糊查询
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.findPoetry = async (ctx, next) => {
  let result = null
  try {
    let {
      like,
      pageSize = 10,
      currentPage = 1
    } = ctx.request.query
    pageSize = parseInt(pageSize)
    currentPage = parseInt(currentPage)
    result = await PoetryService.findPoetry({
      like,
      pageSize,
      currentPage
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
