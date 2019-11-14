const express = require('express')
const asyncify = require('express-asyncify')

const db = require('db')
const config = require('db/config')(false)

const api = asyncify(express.Router())

const { param, body, validationResult } = require('express-validator')

const debug = require('debug')('mern:api')

let services, User

api.use('*', async (req, res, next) => {
  if (!services) {
    debug(`Connecting to database...`)

    try {
      services = await db(config)
    } catch (e) {
      return next(e)
    }

    User = services.User
  }

  next()
})

api.get('/users', async (req, res, next) => {
  debug('[GET] A request has come to /users')

  let users = []

  try {
    users = await User.findAll()
  } catch (e) {
    next(e)
  }

  res.status(200).json(users)
})

api.get('/user/:id', [
  param('id').isString().isLength({ min: 1, max: 5 })
], async (req, res, next) => {
  debug('[GET] A request has come to /user')

  const errors = validationResult(req)

  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })

  let user = {}
  const { id } = req.params

  try {
    user = await User.findByID(id)
  } catch (e) {
    next(e)
  }

  if (user) return res.status(200).json(user)

  res.status(404).json({ message: `User ${id} not found` })
})

api.post('/user', [
  body('name').isString().isLength({ min: 5, max: 255 }),
  body('lastName').isString().isLength({ min: 5, max: 255 })
], async (req, res, next) => {
  debug('[POST] A request has come to /user')

  const errors = validationResult(req)

  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })

  let userCreated = {}
  const { name, lastName } = req.body

  try {
    userCreated = await User.createOrUpdate({ name, lastName })
  } catch (e) {
    next(e)
  }

  res.status(201).json(userCreated)
})

api.put('/user', [
  body('id').isInt({ min: 1, max: 11 }),
  body('name').isString().isLength({ min: 5, max: 255 }),
  body('lastName').isString().isLength({ min: 5, max: 255 })
], async (req, res, next) => {
  debug('[PUT] A request has come to /user')

  const errors = validationResult(req)

  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })

  const { id, name, lastName } = req.body

  let user = null

  try {
    user = await User.findByID(id)
  } catch (e) {
    next(e)
  }

  if (!user) return res.status(404).json({ message: `User ${id} not found` })

  let userUpdated = {}

  const cond = {
    where: {
      id
    }
  }

  try {
    userUpdated = await User.createOrUpdate({ name, lastName }, cond)
  } catch (e) {
    next(e)
  }

  res.status(200).json(userUpdated)
})

api.delete('/user/:id', [
  param('id').isString().isLength({ min: 1, max: 5 })
],async (req, res, next) => {
  debug('[DELETE] A request has come to /user')
  const errors = validationResult(req)

  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })

  const { id } = req.params

  let user = null

  try {
    user = await User.findByID(id)
  } catch (e) {
    next(e)
  }

  if (!user) return res.status(404).json({ message: `User ${id} not found` })

  try {
    await User.deleteByID(id)
  } catch (e) {
    next(e)
  }

  res.status(200).json({ message: `User ${id} successfully removed` })
})

module.exports = api
