/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description:
 * @Date: 2018-11-29 15:42:07
 * @LastEditTime: 2019-01-14 09:44:02
 */
const PoemService = require('../services/poem')
const PoemAuthorService = require('../services/poem-author')
const {
  sortBy
} = require('lodash')
/**
 * @description 获取推荐
 * @author sam.hongyang
 * @param  {} ctx
 * @param  {} next
 */
exports.promotePoem = async (ctx, next) => {
  let result = null
  try {
    let {
      size = 1
    } = ctx.request.query
    size = parseInt(size)
    result = await PoemService.promotePoem({
      size
    })
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
exports.getAuthorByPoem = async (ctx, next) => {
  let result = null
  try {
    let {
      rank = 6
    } = ctx.request.query
    rank = parseInt(rank)
    let poems = await PoemService.getAuthorByPoem({
      rank
    })
    let ids = poems.map(item => {
      return item.poem_author_id
    })
    let authors = await PoemAuthorService.fetchAuthorByIds({
      ids
    })
    result = authors.map(item => {
      let n = item
      poems.forEach(poetry => {
        if (poetry.poem_author_id === item.id) {
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
exports.findPoemById = async (ctx, next) => {
  let result = null
  try {
    let {
      id
    } = ctx.params
    result = await PoemService.findPoemById({
      id
    })
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
exports.findPoem = async (ctx, next) => {
  let result = null
  try {
    let {
      like,
      pageSize = 10,
      currentPage = 1
    } = ctx.request.query
    pageSize = parseInt(pageSize)
    currentPage = parseInt(currentPage)
    result = await PoemService.findPoem({
      like,
      pageSize,
      currentPage
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
