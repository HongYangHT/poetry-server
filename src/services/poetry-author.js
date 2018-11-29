/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-28 09:35:37
 * @LastEditTime: 2018-11-28 10:13:38
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
