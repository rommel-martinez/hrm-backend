const express = require('express')
const router = express.Router()
const departmentsController = require('../controllers/departmentsController')

router.post(`/createdepartment`, departmentsController.Create)

router.get(`/getdepartment`, departmentsController.GetItem)

router.get(`/getalldepartment`, departmentsController.GetAll)

router.put(`/updatedepartment`, departmentsController.Update)

router.put(`/deletedepartment`, departmentsController.Delete)

module.exports = router