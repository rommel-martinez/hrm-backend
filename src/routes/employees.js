const express = require('express')
const router = express.Router()
const employeesController = require('../controllers/employeesController')

router.post(`/createemployee`, employeesController.Create)

router.get(`/getemployee`, employeesController.GetItem)

router.get(`/getallemployee`, employeesController.GetAll)

router.put(`/updateemployee`, employeesController.Update)

router.put(`/deleteemployee`, employeesController.Delete)

module.exports = router 