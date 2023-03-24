import express, { application } from 'express'
import cors from 'cors'
import Router from './router/router'

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
const bodyParse = require('body-parser');
const app = express();
app.use(bodyParse.json({ limit: '100mb'}));
app.use(bodyParse.urlencoded({ limit: '100mb', extend: true}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send('Servidor rodando.')
})
app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use('/veiculo', Router);
app.use((req, res) => {
    res.status(404)
})
app.listen(PORT, () => {
    console.log(`Servidor rodando em ${HOSTNAME}:${PORT}`)
})
