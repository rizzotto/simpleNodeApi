const express = require('express')
const mongoose = require('mongoose')
const requiredir = require('require-dir')
const cors = require('cors')
const logger = require("./Logger")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true })

requiredir('./src/models')



app.use('/api', require('./src/routes'))


app.listen(8080, () => {
    logger.log('info', "server up and running on PORT: 3001");
})

