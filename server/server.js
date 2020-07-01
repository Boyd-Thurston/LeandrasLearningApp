// import external modules
const path = require('path')
const express = require('express')

// loca imports
const authRoutes = require('./routes/auth')

// define server
const server = express()

// add middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/v1/auth', authRoutes)

// export server
module.exports = server