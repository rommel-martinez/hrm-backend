const express = require('express')
const router = express.Router()
const holidayController = require('../controllers/holidaysController')

router.post(`/createholiday`, holidayController.Create)

router.get(`/getholiday`, holidayController.GetItem)

router.get(`/getallholiday`, holidayController.GetAll)

router.put(`/updateholiday`, holidayController.Update)

router.put(`/deleteholiday`, holidayController.Delete)

module.exports = router