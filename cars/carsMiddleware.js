const jwt = require('jsonwebtoken')

function checkToken(req, res, next) {
    var token = req.headers.authorization
    console.log(token)
    var decoded = jwt.verify(token, 'shhhhh')
    console.log(decoded)

    next()
}

module.exports = {
    checkToken
}
