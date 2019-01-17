/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 用于处理诗词DAO
 * @Date: 2018-11-26 17:01:02
 * @LastEditTime: 2019-01-14 09:46:19
 */
const Poetry = require('../models/poetry')
const PoetryAuthor = require('../models/poetry-author')
// const MappingCode = require('../utils/mapping-code')
const Sequelize = require('sequelize')
const sequelize = require('../db/index')

/**
 * @description 随机推荐诗歌
 * @author sam.hongyang
 * SELECT * FROM `poetrys`
 * WHERE id >= (SELECT floor(RAND() * ((SELECT MAX(id) FROM `poetrys`) - (SELECT MIN(id) FROM `poetrys`)) + (SELECT MIN(id) FROM `poetrys`)))
 * ORDER BY id LIMIT 1;
 * order by ramdon
 */
exports.promotePoetry = async (params) => {
  let { size = 4 } = params
  let result = null
  try {
    result = await sequelize.query(`SELECT * FROM poetrys WHERE id >= (SELECT floor(RAND() * ((SELECT MAX(id) FROM
      poetrys) - (SELECT MIN(id) FROM
      poetrys)) + (SELECT MIN(id) FROM
      poetrys))) ORDER BY id LIMIT ${size} `, {
      type: sequelize.QueryTypes.SELECT
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
/**
 * @description 诗人排名
 * @author sam.hongyang
 * @param  {} params
 */
exports.getAuthorByPoetry = async (params) => {
  let { rank = 6 } = params
  let result = null
  try {
    /**
     * SELECT poetry_author_id, COUNT( * ) AS 出现次数 FROM poetrys GROUP BY poetry_author_id ORDER BY 出现次数 DESC LIMIT 20;
     * SELECT `poetry_author_id`, count('poetry_author_id') AS `total`
     * FROM `poetrys`
     * AS `poetrys`
     * GROUP BY `poetry_author_id`
     * ORDER BY count('poetry_author_id') DESC LIMIT 6;
     */
    result = await Poetry.findAll({
      attributes: ['poetry_author_id', [Sequelize.fn('count', 'poetry_author_id'), 'total']],
      group: ['poetry_author_id'],
      order: [[Sequelize.fn('count', 'poetry_author_id'), 'desc']],
      limit: rank,
      raw: true
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
/**
 * @description 查询诗
 * @author sam.hongyang
 * @param  {} params
 */
exports.findPoetryById = async (params) => {
  let { id } = params
  let result = null
  try {
    result = await Poetry.findById(id, {
      include: [{
        model: PoetryAuthor
      }]
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}

/**
 * @description 模糊查询诗歌, 这里可以是title和内容
 * @author sam.hongyang
 * @param  {} params
 */
exports.findPoetry = async (params) => {
  let {
    like,
    pageSize = 10,
    currentPage = 1
  } = params
  let result = null
  let options = {
    where: {},
    offset: (currentPage - 1) * pageSize,
    limit: pageSize,
    order: [
      ['title', 'ASC']
    ]
  }
  if (like) {
    options['where']['$or'] = {
      title: {
        $like: `%${like}%`
      },
      content: {
        $like: `%${like}%`
      }
    }
  }
  try {
    result = await Poetry.findAndCountAll(options)
  } catch (error) {
    throw new Error(error)
  }
  return result
}
