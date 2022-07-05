import express from 'express'
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const mockDepartamentos = require("./mock/departamentos.mock.json") // use the require method

const app = express()

// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// passamos o nome do diretorio que será publico
app.use( express.static('public') )

// Exemplo de rotas
app.get('/', (req,res) => {
  res.send('novo dado via GET')
})

app.post('/', (req,res) => {
  res.send('request feita via POST')
})

// Lista os departamentos
app.get('/departamentos', (req,res) => {
  res.send(mockDepartamentos)
})

// Lista um departamento especifico
app.get('/departamentos/:idDepartamento', (req,res) => {
  // implementar um filter dentro do mock para encontrar o depto pelo ID
  // Ex. se a request for para: http://localhost:3030/departamentos/1
  // a resposta deve ser:
  // { "id": "1", "nome": "Recursos Humanos", "sigla": "RH" }
  // SE o id não for encontrado, deve retornar um objeto vazio: {}
  const { idDepartamento } = req.params

  const resultado = mockDepartamentos.filter((depto) => {
    return depto.id == idDepartamento
  })

  res.send(resultado)
})



app.listen(3030, () => console.log('Running server'))
