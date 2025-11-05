import Categoria from '../models/categoriaModel.js'

export const listarCategorias = (req, res) => {
  res.json(Categoria.listar())
}

export const criarCategoria = (req, res) => {
  const { descricao, status } = req.body

  if (!descricao || status === undefined) {
    return res.status(400).json({ erro: 'Preencha todos os campos!' })
  }

  const nova = Categoria.criar({ descricao, status })
  res.status(201).json({ mensagem: 'Categoria criada com sucesso!', dados: nova })
}

export const atualizarCategoria = (req, res) => {
  const id = Number(req.params.id)
  const { descricao, status } = req.body
  const atualizada = Categoria.atualizar(id, { descricao, status })

  if (!atualizada) return res.status(404).json({ erro: 'Categoria não encontrada!' })
  res.json({ mensagem: 'Categoria atualizada com sucesso!', dados: atualizada })
}

export const removerCategoria = (req, res) => {
  const id = Number(req.params.id)
  const removida = Categoria.remover(id)
  if (!removida) return res.status(404).json({ erro: 'Categoria não encontrada!' })
  res.json({ mensagem: 'Categoria removida com sucesso!' })
}
