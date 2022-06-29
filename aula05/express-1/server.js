import express from 'express'
import { readFile } from 'fs'

const app = express()

// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// passamos o nome do diretorio que será publico
app.use( express.static('public') )

// Exemplo de rotas
app.get('/', (req,res) => {
  readFile('index.htm', 'utf-8', (err, data) => {
    res.send(data)
  })
})

app.get('/alunos', (req, res) => {
  res.send('Página dos alunos')
})

// http://localhost:3030/alunos?idAluno=99&genero=M
// http://localhost:3030/alunos/99/M
app.get('/alunos/:idAluno/:genero', (req, res) => {
  res.send(req.params)
})


app.listen(3030, () => console.log('Running server'))




