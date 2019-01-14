/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description:
 * @Date: 2018-11-29 17:08:43
 * @LastEditTime: 2019-01-14 09:46:11
 */
const ShiJing = require('../models/shijing')
// const MappingCode = require('../utils/mapping-code')
// const Sequelize = require('sequelize')
const sequelize = require('../db/index')
/**
 * @description 推荐诗经
 * @author sam.hongyang
 * @param  {} params
 */
exports.premoteShiJing = async (params) => {
  let {
    size
  } = params
  let result = null
  try {
    result = await sequelize.query(`SELECT * FROM shijings WHERE id >= (SELECT floor(RAND() * ((SELECT MAX(id) FROM
      shijings) - (SELECT MIN(id) FROM
      shijings)) + (SELECT MIN(id) FROM
      shijings))) ORDER BY id LIMIT ${size} `, {
      type: sequelize.QueryTypes.SELECT
    })
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
exports.getShiJingById = async (params) => {
  let {
    id
  } = params
  let result = null
  try {
    result = await ShiJing.findById(id)
  } catch (error) {
    throw new Error(error)
  }
  return result
}
