const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const {authenticate} = require('./authMiddleware')


//http://localhost:3000/auth/login
router.post('/login', authenticate, (req, res) => {

    var token = jwt.sign({ foo: 'bar'}, 'shhhhh')

    res.status(200).json(token)
})

module.exports = router
