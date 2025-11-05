import Transacao from '../models/transacaoModel.js'

export const listarTransacoes = (req, res) => {
  res.json(Transacao.listar())
}

export const criarTransacao = (req, res) => {
  const { descricao, data, valor, tipo, usuarios_id, categorias_id } = req.body

  if (!descricao || !data || !valor || tipo === undefined) {
    return res.status(400).json({ erro: 'Preencha todos os campos obrigatórios!' })
  }

  const nova = Transacao.criar({ descricao, data, valor, tipo, usuarios_id, categorias_id })
  res.status(201).json({ mensagem: 'Transação criada com sucesso!', dados: nova })
}

export const atualizarTransacao = (req, res) => {
  const id = Number(req.params.id)
  const { descricao, data, valor, tipo, usuarios_id, categorias_id } = req.body
  const atualizada = Transacao.atualizar(id, { descricao, data, valor, tipo, usuarios_id, categorias_id })

  if (!atualizada) return res.status(404).json({ erro: 'Transação não encontrada!' })
  res.json({ mensagem: 'Transação atualizada com sucesso!', dados: atualizada })
}

export const removerTransacao = (req, res) => {
  const id = Number(req.params.id)
  const removida = Transacao.remover(id)
  if (!removida) return res.status(404).json({ erro: 'Transação não encontrada!' })
  res.json({ mensagem: 'Transação removida com sucesso!' })
}
