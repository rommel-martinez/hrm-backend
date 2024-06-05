const express = require('express')
const router = express.Router()
const employeesController = require('../controllers/employeesController')

router.post(`/createEmployee`, employeesController.createEmployee)

router.get(`/getEmployee`, employeesController.getEmployee)

router.get(`/getAllEmployee`, employeesController.getAllEmployee)

router.put(`/updateEmployee`, employeesController.updateEmployee)

router.post(`/deleteEmployee`, employeesController.deleteEmployee)

module.exports = router 