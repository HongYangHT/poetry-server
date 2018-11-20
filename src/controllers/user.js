/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-14 17:43:57
 * @LastEditTime: 2018-11-20 17:10:46
 */
const UserServices = require('../services/user')

exports.getUsers = async (params) => {
  let result = null
  try {
    result = await UserServices.getUsers()
  } catch (error) {
    throw new Error(error)
  }
  return result
}

exports.addUser = async (params) => {
  let user = null
  try {
    user = await UserServices.addUser()
  } catch (error) {
    throw new Error(error)
  }
  return user
}
