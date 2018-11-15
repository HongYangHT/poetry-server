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
