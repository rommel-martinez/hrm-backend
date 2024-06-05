const express = require('express')
const bodyParser = require('body-parser')

const app = express()

/* Middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Routes */
const bankRoute = require('./routes/banks')
const employeeRoute = require('./routes/employees')
const departmentRoute = require('./routes/departments')
const occupationRoute = require('./routes/occupations')

app.use('/banks', bankRoute)
app.use('/employees', employeeRoute)
app.use('/departments', departmentRoute)
app.use('/occupations', occupationRoute)

const port = 3001

app.listen(port, () => {
    console.log("Listening on port:", port)
})