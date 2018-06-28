
function isAuthenticUser(email, password) {
    console.log(email)
    if(email === 'example@email.com' && password === 'password123') {
        return true
    }
    return false
}

module.exports = {
    isAuthenticUser
}
