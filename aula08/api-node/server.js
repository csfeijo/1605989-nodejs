import express from 'express'
import bodyParser from 'body-parser'
import con from './connection.js'

const app = express()

// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// passamos o nome do diretorio que será publico
app.use( express.static('public') )
// Configuramos o servidor para utilizar o middleware do body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


// Lista os departamentos
app.get('/departamentos', (req,res) => {
  con.query('SELECT * FROM DEPARTAMENTOS ORDER BY nome', (err, result) => {
    console.log('Called route /departamentos')
    res.send(result)
  })
})

// Lista um departamento especifico
app.get('/departamentos/:idDepartamento', (req,res) => {
  let { idDepartamento } = req.params
  idDepartamento = parseInt(idDepartamento)

  console.log('Called route /departamentos/:idDepartamento', idDepartamento)
  if (isNaN(idDepartamento)) {
    res.send({
      code: '1234',
      message: 'idDepartamento should be a number'
    })
  } else {


    con.query(`SELECT * FROM DEPARTAMENTOS WHERE id_departamento = ${idDepartamento}`, (err, result) => {
      if (result.length > 0) {
        console.log('Found ', result.length, ' rows')
      } else {
        console.error('Not found rows')
        res.statusCode(404)
      }

      res.send(result)
    })
  }
})

// Insere um departamento
app.post('/departamentos', (req, res) => {
  const { nome, sigla } = req.body
  if (nome != undefined && sigla != undefined) {
    // Implemente a inserção do Depto. no banco de dados



  } else {
    res.send('Algo deu errado')
  }
})

// Altera por completo os dados de um departamento
app.put('/departamentos/:id_Departamento', (req, res) => {
  res.send('Altera por completo um departamento.')
})

// Altera parcialmente os dados de um departamento
app.patch('/departamentos/:idDepartamento', (req, res) => {
  res.send('Altera parcialmente um departamento.')
})

// Remove um departamento
app.delete('/departamentos/:idDepartamento', (req, res) => {
  res.send('Remove um departamento.')
})



app.listen(3030, () => console.log('Running server'))
