const express = require("express")
const controller = require('../controllers/colaboradorasController')

const router = express.Router()


router.post('/colaboradoras/', controller.create) 
router.post('/colaboradoras/login', controller.login)
router.get('/colaboradoras/', controller.getAll)
router.delete('/colaboradoras/:id', controller.deleteById)

module.exports = router
