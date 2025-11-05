import express from 'express'
import { listarCategorias, criarCategoria, atualizarCategoria, removerCategoria } from '../controllers/categoriaController.js'

const router = express.Router()

router.get('/', listarCategorias)
router.post('/', criarCategoria)
router.put('/:id', atualizarCategoria)
router.delete('/:id', removerCategoria)

export default router
