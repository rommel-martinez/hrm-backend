const express = require('express')
const router = express.Router()
const departmentsController = require('../controllers/departmentsController')

router.post(`/createDepartment`, departmentsController.createDepartment)

router.get(`/getdepartment`, departmentsController.getDepartment)

router.get(`/getAllDepartment`, departmentsController.getAllDepartment)

router.put(`/updateDepartment`, departmentsController.updateDepartment)

router.put(`/deleteDepartment`, departmentsController.deleteDepartment)

module.exports = router