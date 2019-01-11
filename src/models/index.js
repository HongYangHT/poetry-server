/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 将model全部引入, 并建立相关的关系
 * @Date: 2019-01-10 15:44:16
 * @LastEditTime: 2019-01-10 17:27:23
 */
const Auth = require('./auth')
const LunYu = require('./lunyu')
const PoemAuthor = require('./poem-author')
const Poem = require('./poem')
const PoetryAuthor = require('./poetry-author')
const Poetry = require('./poetry')
const Role = require('./role')
const ShiJing = require('./shijing')
const User = require('./user')
const {
  UserPoetry,
  UserPoem,
  UserLunyu,
  UserShijing
} = require('./comment')

const db = require('../db')

/**
 * 用户与第三方登录
 */
User.hasMany(Auth)
Auth.belongsTo(User)

/**
 * 角色与用户的关系
 */
Role.belongsToMany(User, {
  through: 'user_roles'
})
User.belongsToMany(Role, {
  through: 'user_roles'
})

/**
 * 词与词人的关系
 */
PoemAuthor.hasMany(Poem)
Poem.belongsTo(PoemAuthor)

/**
 * 诗与诗人的关系
 */
PoetryAuthor.hasMany(Poetry)
Poetry.belongsTo(PoetryAuthor)

/**
 * 用户与诗词种类之间的关系，点赞和关注的诗词种类
 */
User.belongsToMany(Poetry, {
  through: UserPoetry
})

Poetry.belongsToMany(User, {
  through: UserPoetry
})

User.belongsToMany(Poem, {
  through: UserPoem
})

Poem.belongsToMany(User, {
  through: UserPoem
})

User.belongsToMany(ShiJing, {
  through: UserShijing
})

ShiJing.belongsToMany(User, {
  through: UserShijing
})

User.belongsToMany(LunYu, {
  through: UserLunyu
})

LunYu.belongsToMany(User, {
  through: UserLunyu
})

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
    db.sync({
      force: false
    })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
