const express = require('express')
const bodyParser = require('body-parser')

const app = express()

/* Middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Routes */
const employeeRoute = require('./routes/employees')
const departmentRoute = require('./routes/departments')

app.use('/employees', employeeRoute)
app.use('/departments', departmentRoute)

const port = 3001

app.listen(port, () => {
    console.log("Listening on port:", port)
})