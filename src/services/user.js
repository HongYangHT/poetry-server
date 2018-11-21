/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-14 17:44:06
 * @LastEditTime: 2018-11-21 18:28:48
 */
const User = require('../models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10
/**
 * @description 分页查询用户
 * @author sam.hongyang
 * @param  {} params
 */
exports.getUsers = async (params) => {
  let result = null
  let {
    currentPage = 1, pageSize = 10, name = ''
  } = params
  let options = {
    attributes: {
      exclude: ['password']
    },
    where: {},
    offset: (currentPage - 1) * pageSize,
    limit: pageSize,
    order: [
      ['created_at', 'DESC']
    ]
  }
  if (name) {
    options['where']['$or'] = {
      name: {
        $like: `%${name}%`
      },
      nickname: {
        $like: `%${name}%`
      }
    }
  }
  try {
    result = await User.findAndCountAll(options)
  } catch (error) {
    throw new Error(error)
  }
  return result
}

/**
 * @description 新增用户 用于注册
 * @author sam.hongyang
 * @param  {} params
 */
exports.createUser = async (params) => {
  let { name, password } = params
  let result = null
  let salt = bcrypt.genSaltSync(saltRounds)
  password = bcrypt.hashSync(password, salt)
  try {
    result = await User.findOrCreate({
      where: {
        name
      },
      defaults: {
        password
      }
    }).spread((user, created) => {
      if (!created) {
        throw new Error('user is already exist!')
      }
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
