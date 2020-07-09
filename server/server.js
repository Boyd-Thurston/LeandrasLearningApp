// import external modules
const path = require('path')
const express = require('express')

// loca imports
const authRoutes = require('./routes/auth')
const parentRoutes = require('./routes/parent')

// define server
const server = express()

// add middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/parent', parentRoutes)

server.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'))
})

// export server
module.exports = server