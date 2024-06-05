const express = require('express')
const router = express.Router()
const banksController = require('../controllers/banksController')

router.post(`/createbank`, banksController.Create)

router.get(`/getbank`, banksController.GetItem)

router.get(`/getallbank`, banksController.GetAll)

router.put(`/updatebank`, banksController.Update)

router.put(`/deletebank`, banksController.Delete)

module.exports = router