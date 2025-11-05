let usuarios = []
let id = 1

const Usuario = {
  listar: () => usuarios,
  criar: (dados) => {
    const novo = { id: id++, ...dados }
    usuarios.push(novo)
    return novo
  },
  atualizar: (idParam, dados) => {
    const index = usuarios.findIndex(u => u.id === idParam)
    if (index === -1) return null
    usuarios[index] = { id: idParam, ...dados }
    return usuarios[index]
  },
  remover: (idParam) => {
    const index = usuarios.findIndex(u => u.id === idParam)
    if (index === -1) return false
    usuarios.splice(index, 1)
    return true
  }
}

export default Usuario
