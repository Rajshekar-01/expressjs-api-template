require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/note', require('./routes/note.route'))

const port = process.env.port || 3000
app.listen(port, console.log(`App listining in port ${port} - http://localhost:${port}`))