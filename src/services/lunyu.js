/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-29 16:40:49
 * @LastEditTime: 2018-11-29 17:40:09
 */
const LunYu = require('../models/lunyu')
const MappingCode = require('../utils/mapping-code')
const Sequelize = require('sequelize')
const sequelize = require('../db/index')
/**
 * @description 推荐论语
 * @author sam.hongyang
 * @param  {} params
 */
exports.promoteLunYu = async (params) => {
  let { size } = params
  let result = null
  try {
    result = await sequelize.query(`SELECT * FROM lunyus WHERE id >= (SELECT floor(RAND() * ((SELECT MAX(id) FROM
      lunyus) - (SELECT MIN(id) FROM 
      lunyus)) + (SELECT MIN(id) FROM 
      lunyus))) ORDER BY id LIMIT ${size} `, {
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
exports.getLunYuById = async (params) => {
  let { id } = params
  let result = null
  try {
    result = await LunYu.findById(id)
  } catch (error) {
    throw new Error(error)
  }
  return result
}
