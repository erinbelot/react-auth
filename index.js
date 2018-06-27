const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const authRouter = require('./auth/authRouter')
const app = express()

const PORT = 3001
//jake is dumb
app.use('/auth', authRouter)


app.use(bodyParser.json())
app.use(cors())

app.use((err, req, res, next) => {
    res.status(500)
    res.json({error: err})
})

app.listen(PORT, () => {
    console.info(`listening on port ${PORT}`)
})

