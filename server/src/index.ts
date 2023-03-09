import express, { application } from 'express'
import cors from 'cors'
import Router from './router/router'

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send('Servidor rodando.')
})
app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use('/', Router);
app.use((req, res) => {
    res.status(404)
})
app.listen(PORT, () => {
    console.log(`Servidor rodando em ${HOSTNAME}:${PORT}`)
})
