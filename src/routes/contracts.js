const express = require('express')
const router = express.Router()
const contractController = require('../controllers/contractController')
const { route } = require('./banks')

router.post(`/createcontract`, contractController.Create)

router.get(`/getcontract`, contractController.GetItem)

router.get(`/getallcontract`, contractController.GetAll)

router.put(`/updatecontract`, contractController.Update)

router.put(`/deletecontract`, contractController.Delete)

module.exports = router