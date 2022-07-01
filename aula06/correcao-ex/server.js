import express from 'express'
import dirName from './dirname.js'

const app = express()

// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// passamos o nome do diretorio que será publico
app.use( express.static('public') )

// Exemplo de rotas
app.get('/', (req,res) => {
  res.sendFile(`${dirName()}/index.htm`)
})

app.get('/contato', (req,res) => {
  res.sendFile(`${dirName()}/contato.htm`)
})

app.listen(3030, () => console.log('Running server'))
