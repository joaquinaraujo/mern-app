require('dotenv').config()

const express = require('express')
const app = express()

const api = require('./api')

const port = process.env.PORT || 3000

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/api', api)

app.use((req, res, next) => res.status(404).json({ message: `Endpoint ${req.url} not found` }))

app.use((err, req, res, next) => res.status(500).json({ error: err }))

app.listen(port, () => console.log(`App listening on port ${port}!`))
