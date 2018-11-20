/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-14 17:44:06
 * @LastEditTime: 2018-11-20 17:11:27
 */
const User = require('../models/user')

exports.getUsers = async (query) => {
  let result = null
  try {
    result = await User.findAndCountAll()
  } catch (error) {
    throw new Error(error)
  }
  return result
}

exports.addUser = async (query) => {
  let user = null
  try {
    user = await User.create({
      name: 'hongyang',
      nickname: 'sam'
    })
  } catch (error) {
    throw new Error(error)
  }
  return user
}
