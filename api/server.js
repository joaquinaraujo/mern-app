require('dotenv').config()

const express = require('express')
const app = express()

const api = require('./api')

const port = process.env.PORT || 3000

const bodyParser = require('body-parser')
const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200
}

app.use(express.urlencoded({extended: true})); 
app.use(express.json());  
app.use(cors(corsOptions))
app.use('/api', api)

app.use((req, res, next) => res.status(404).json({ message: `Endpoint ${req.url} not found` }))

app.use((err, req, res, next) => res.status(500).json({ error: err }))

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app
