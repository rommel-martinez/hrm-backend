const express = require('express')
const router = express.Router()
const employeesController = require('../controllers/employeesController')

router.post(`/createEmployee`, employeesController.Create)

router.get(`/getEmployee`, employeesController.GetItem)

router.get(`/getAllEmployee`, employeesController.GetAll)

router.put(`/updateEmployee`, employeesController.Update)

router.put(`/deleteEmployee`, employeesController.Delete)

module.exports = router 