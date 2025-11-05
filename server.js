import 'dotenv/config'
import app from './src/app.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
  console.log('Conexão simulada com:')
  console.log(`Host: ${process.env.DB_HOST}`)
  console.log(`Usuário: ${process.env.DB_USER}`)
  console.log(`Banco: ${process.env.DB_NAME}`)
})
