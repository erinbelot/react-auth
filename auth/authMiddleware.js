const auth = require('./util')
module.exports = {
    authenticate
}


function authenticate(req, res, next) {
    const {email, password} = req.body

    const authed = auth.isAuthenticUser(email, password)

    if (!authed) {
        next(new Error('Not Authorized'))
    }

    next() 
}
