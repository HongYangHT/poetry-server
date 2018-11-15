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
