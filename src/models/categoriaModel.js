let categorias = []
let id = 1

const Categoria = {
  listar: () => categorias,
  criar: (dados) => {
    const nova = { id: id++, ...dados }
    categorias.push(nova)
    return nova
  },
  atualizar: (idParam, dados) => {
    const index = categorias.findIndex(c => c.id === idParam)
    if (index === -1) return null
    categorias[index] = { id: idParam, ...dados }
    return categorias[index]
  },
  remover: (idParam) => {
    const index = categorias.findIndex(c => c.id === idParam)
    if (index === -1) return false
    categorias.splice(index, 1)
    return true
  }
}

export default Categoria
