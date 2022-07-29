require('dotenv-safe').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect.js')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

const indexRoutes = require('./routes/index')
const cirandeirasRoutes = require('./routes/cirandeirasRoutes')
const ritmosRoutes = require('./routes/ritmosRoutes')
const colaboradorasRoutes = require('./routes/colaboradorasRoutes')

const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect()
app.use(indexRoutes)
app.use(cirandeirasRoutes)
app.use(ritmosRoutes)
app.use(colaboradorasRoutes)
app.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app
