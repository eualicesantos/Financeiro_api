import Usuario from '../models/usuarioModel.js'

export const listarUsuarios = (req, res) => {
  res.json(Usuario.listar())
}

export const criarUsuario = (req, res) => {
  const { username, password, nome, email } = req.body

  if (!username || !password || !nome || !email) {
    return res.status(400).json({ erro: 'Preencha todos os campos!' })
  }

  const novo = Usuario.criar({ username, password, nome, email })
  res.status(201).json({ mensagem: 'Usuário criado com sucesso!', dados: novo })
}

export const atualizarUsuario = (req, res) => {
  const id = Number(req.params.id)
  const { username, password, nome, email } = req.body
  const atualizado = Usuario.atualizar(id, { username, password, nome, email })

  if (!atualizado) return res.status(404).json({ erro: 'Usuário não encontrado!' })
  res.json({ mensagem: 'Usuário atualizado com sucesso!', dados: atualizado })
}

export const removerUsuario = (req, res) => {
  const id = Number(req.params.id)
  const removido = Usuario.remover(id)
  if (!removido) return res.status(404).json({ erro: 'Usuário não encontrado!' })
  res.json({ mensagem: 'Usuário removido com sucesso!' })
}
