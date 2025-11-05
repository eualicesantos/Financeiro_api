import express from 'express'
import { listarTransacoes, criarTransacao, atualizarTransacao, removerTransacao } from '../controllers/transacaoController.js'

const router = express.Router()

router.get('/', listarTransacoes)
router.post('/', criarTransacao)
router.put('/:id', atualizarTransacao)
router.delete('/:id', removerTransacao)

export default router
