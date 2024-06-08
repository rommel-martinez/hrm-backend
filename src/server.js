const express = require('express')
const bodyParser = require('body-parser')

const app = express()

/* Middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Routes */
// Attendances
const bankRoute = require('./routes/banks')
const contactRoute = require('./routes/contracts')
const departmentRoute = require('./routes/departments')
const employeeRoute = require('./routes/employees')
const holidayRoute = require('./routes/holidays')
const leaverequestRoute = require('./routes/leaverequest')
// Logins
const occupationRoute = require('./routes/occupations')

app.use('/banks', bankRoute)
app.use('/contracts', contactRoute)
app.use('/departments', departmentRoute)
app.use('/employees', employeeRoute)
app.use('/holidays', holidayRoute)
app.use('/leaverequests', leaverequestRoute)
app.use('/occupations', occupationRoute)

const port = 3001

app.listen(port, () => {
    console.log("Listening on port:", port)
})