/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-14 17:44:06
 * @LastEditTime: 2018-11-21 17:11:39
 */
const User = require('../models/user')

exports.getUsers = async (query) => {
  let result = null
  let {
    currentPage = 1, pageSize = 10, name = ''
  } = query
  try {
    result = await User.findAndCountAll({
      attributes: {
        exclude: ['password']
      },
      where: {
        $or: {
          name: {
            $like: `%${name}%`
          },
          nickname: {
            $like: `%${name}%`
          }
        }
      },
      offset: (currentPage - 1) * pageSize,
      limit: pageSize,
      order: [
        ['created_at', 'DESC']
      ]
    })
  } catch (error) {
    throw new Error(error)
  }
  return result
}
