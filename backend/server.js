require('dotenv').config()

const express = require('express')
const messageRoutes = require('./routes/messages')
const mongoose = require('mongoose')
const cors = require('cors')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/messages', messageRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
