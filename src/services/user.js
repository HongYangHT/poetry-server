/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description:
 * @Date: 2018-11-14 17:44:06
 * @LastEditTime: 2019-01-14 09:43:40
 */
const User = require('../models/user')
const bcrypt = require('bcrypt')
const {
  omit
} = require('lodash')
const MappingCode = require('../utils/mapping-code')
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
  let {
    name,
    password
  } = params
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
        throw new Error(`[${MappingCode.USER.EXIST}]: user is already exist!`)
      }
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
/**
 * @description 用户登录
 * @author sam.hongyang
 * @param  {} params
 */
exports.login = async (params) => {
  let {
    name,
    password
  } = params
  let result = null
  try {
    let user = await User.findOne({
      where: {
        name
      }
    })
    if (user) {
      let pass = await bcrypt.compareSync(password, user.password)
      if (pass) {
        result = omit(JSON.parse(JSON.stringify(user)), ['password'])
      } else {
        throw new Error(`[${MappingCode.USER.PASSWORD_WRONG}]: user password is wrong !`)
      }
    } else {
      throw new Error(`[${MappingCode.USER.NOT_EXIST}]: user is not exist !`)
    }
  } catch (error) {
    throw new Error(error)
  }
  return result
}
/**
 * @description 查询某个用户
 * @author sam.hongyang
 * @param  {} params
 */
exports.getUserById = async (params) => {
  let { id } = params
  let result = null
  try {
    let user = await User.findById(id)
    if (!user) {
      throw new Error(`[${MappingCode.USER.NOT_EXIST}]: user is not exist !`)
    }
    result = omit(JSON.parse(JSON.stringify(user)), ['password'])
  } catch (error) {
    throw new Error(error)
  }
  return result
}
