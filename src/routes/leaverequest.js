const express = require('express')
const router = express.Router()
const leaverequestController = require('../controllers/leaverequestController')

router.post(`/createleaverequest`, leaverequestController.Create)

router.get(`/getleaverequest`, leaverequestController.GetItem)

router.get(`/getallleaverequest`, leaverequestController.GetAll)

router.put(`/updateleaverequest`, leaverequestController.Update)

router.put(`/deleteleaverequest`, leaverequestController.Delete)

module.exports = router