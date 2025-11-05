import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import categoriaRoutes from './routes/categoriaRoutes.js'
import transacaoRoutes from './routes/transacaoRoutes.js'

const app = express()
app.use(express.json())

// Rota principal
app.get('/', (req, res) => {
  res.json({ mensagem: 'API Financeiro funcionando!' })
})

// Rotas das entidades
app.use('/usuarios', usuarioRoutes)
app.use('/categorias', categoriaRoutes)
app.use('/transacoes', transacaoRoutes)

export default app
