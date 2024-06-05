const express = require('express')
const router = express.Router()
const occupationController = require('../controllers/occupationsController')

router.post(`/createoccupation`, occupationController.Create)

router.get(`/getoccupation`, occupationController.GetItem)

router.get(`/getalloccupation`, occupationController.GetAllItem)

router.put(`/updateoccupation`, occupationController.Update)

router.put(`/deleteoccupation`, occupationController.Delete)

module.exports = router;