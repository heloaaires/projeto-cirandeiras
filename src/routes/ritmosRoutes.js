const controller = require('../controllers/ritmosController')
const express = require('express')

const router = express.Router()


router.get('/ritmos', controller.getAll)
router.post('/ritmos', controller.create)
router.patch('/ritmos/:id', controller.updateById)
router.delete('/ritmos/:id', controller.deleteById)


module.exports = router


