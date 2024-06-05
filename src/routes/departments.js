const express = require('express')
const router = express.Router()
const departmentsController = require('../controllers/departmentsController')

router.post(`/createDepartment`, departmentsController.Create)

router.get(`/getdepartment`, departmentsController.GetItem)

router.get(`/getAllDepartment`, departmentsController.GetAll)

router.put(`/updateDepartment`, departmentsController.Update)

router.put(`/deleteDepartment`, departmentsController.Delete)

module.exports = router