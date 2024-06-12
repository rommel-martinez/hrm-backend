const express = require('express')
const router = express.Router()
const loginsController = require('../controllers/loginsController')

router.post(`/createlogin`, loginsController.Create)

router.get(`/getlogin`, loginsController.GetItem)

router.get(`/getalllogin`, loginsController.GetAll)

router.put(`/updatelogin`, loginsController.Update)

router.put(`/deletelogin`, loginsController.Delete)

module.exports = router