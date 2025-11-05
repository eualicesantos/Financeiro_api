let transacoes = []
let id = 1

const Transacao = {
  listar: () => transacoes,
  criar: (dados) => {
    const nova = { id: id++, ...dados }
    transacoes.push(nova)
    return nova
  },
  atualizar: (idParam, dados) => {
    const index = transacoes.findIndex(t => t.id === idParam)
    if (index === -1) return null
    transacoes[index] = { id: idParam, ...dados }
    return transacoes[index]
  },
  remover: (idParam) => {
    const index = transacoes.findIndex(t => t.id === idParam)
    if (index === -1) return false
    transacoes.splice(index, 1)
    return true
  }
}

export default Transacao
