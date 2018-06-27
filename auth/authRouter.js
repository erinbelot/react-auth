const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')


//http://localhost:3000/auth/login
router.post('/login', (req, res) => {
    var token = jwt.sign({ foo: 'bar'}, 'shhhhh')

    res.status(200).json(token)
})

module.exports = router