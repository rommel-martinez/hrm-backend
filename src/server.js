const express = require('express')
const bodyParser = require('body-parser')

const app = express()

/* Middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Routes */
const employeeRoute = require('./routes/Employees')
app.use('/employees', employeeRoute)

const port = 3001

app.listen(port, () => {
    console.log("Listening on port:", port)
})