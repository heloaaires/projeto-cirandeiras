const app = require('./src/app.js')
const PORT = process.env.PORT

app.listen(PORT, () =>
    console.log(`O servidor está funcionando na porta ${PORT}.`))