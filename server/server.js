const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

// Express configurations
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '/../client/public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Middleware
app.use((req, res, next) => next())

app.get('/fetchCommands', (req, res) => {
    const commands = require('../config/commands')
    res.status(200).send(commands)
})

app.get('*', (req, res) => {
    res.status(200).sendFile('index.html', {
        root: path.join(__dirname, '/../client/public')
    })
})

app.listen(port, () => console.log(`Listening on port: ${port}`))
