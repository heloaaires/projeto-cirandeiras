const controller = require('../controllers/cirandeirasController')
const express = require('express')

const router = express.Router()


router.get('/cirandeiras', controller.getAll)
router.get('/cirandeiras/:id', controller.getById)
router.post('/cirandeiras', controller.create)
router.delete('/cirandeiras/:id', controller.deleteById)
router.patch('/cirandeiras/:id', controller.updateById)


module.exports = router