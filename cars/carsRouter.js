const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const {checkToken} = require('./carsMiddleware')

router.get('/index', checkToken, (req, res) => {

    res.status(200).json('it worked!')
    
})

module.exports = router
