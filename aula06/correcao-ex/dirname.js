import path from 'path'
import { fileURLToPath } from 'url'

// retorna o caminho completo do arquivo que esta sendo pedido

function dirName() {
  const __filename = fileURLToPath(import.meta.url)
  return path.dirname(__filename)
}

export default dirName
