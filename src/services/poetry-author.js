/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-28 09:35:37
 * @LastEditTime: 2018-11-29 15:28:20
 */
const PoetryAuthor = require('../models/poetry-author')
const MappingCode = require('../utils/mapping-code')
/**
 * @description 根据id查询
 * @param  {} params
 */
exports.fetchAuthorByIds = async (params) => {
  let { ids } = params
  let result = null
  try {
    result = await PoetryAuthor.findAll({
      where: {
        id: {
          $in: ids
        }
      },
      raw: true
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}

/**
 * @description 模糊查询诗人
 * @author sam.hongyang
 * @param  {} params
 */
exports.findAuthor = async (params) => {
  let {
    name,
    pageSize,
    currentPage
  } = params
  let result = null
  let options = {
    where: {},
    offset: (currentPage - 1) * pageSize,
    limit: pageSize,
    order: [
      ['name', 'ASC']
    ]
  }
  if (name) {
    options['where'] = {
      name: {
        $like: `%${name}%`
      }
    }
  }
  try {
    result = await PoetryAuthor.findAndCountAll(options)
  } catch (error) {
    throw new Error(error)
  }
  return result
}

/**
 * @description 根据id查询
 * @author sam.hongyang
 * @param  {} params
 */
exports.findAuthorById = async (params) => {
  let { id } = params
  let result = null
  try {
    result = await PoetryAuthor.findById(id)
  } catch (error) {
    throw new Error(error)
  }
  return result
}
