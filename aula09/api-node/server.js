import express from 'express'
import bodyParser from 'body-parser'
import con from './connection.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const app = express()
const options = {
  definition: {
    info: {
      title: 'API Node JS', // (obrigatório)
      version: '1.0.0', // (obrigatório)
    },
  },
  // Path da aplicação principal (onde estão as rotas documentadas)
  apis: ['server.js'],
};
// Adicionamos o gerador de documentação em uma const
const swaggerSpec = swaggerJSDoc(options);


// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// passamos o nome do diretorio que será publico
app.use( express.static('public') )
// Configuramos o servidor para utilizar o middleware do body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

/**
 * @swagger
 *
 * /departamentos:
 *   get:
 *     description: Lista todos departamentos
 *     produces:
 *       - text/html
 *     responses:
 *       200:
 *         description: Exibe todos departamentos em um vetor
 */
app.get('/departamentos', (req,res) => {
  con.query('SELECT * FROM DEPARTAMENTOS ORDER BY nome', (err, result) => {
    res.send(result)
  })
})

// Lista um departamento especifico
app.get('/departamentos/:idDepartamento', (req,res) => {
  const { idDepartamento } = req.params

  con.query(`SELECT * FROM DEPARTAMENTOS WHERE id_departamento = ${idDepartamento}`, (err, result) => {
    res.send(result)
  })
})

/**
 * @swagger
 *
 * /departamentos:
 *   post:
 *     description: Insere departamento
 *     produces:
 *       - text/json
  *     parameters:
 *       - name: sigla
 *         description: sigla do depto.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Insere um depto. no banco
 */
app.post('/departamentos', (req, res) => {
  const { nome, sigla } = req.body
  if (nome != undefined && sigla != undefined) {
    // Implemente a inserção do Depto. no banco de dados
    con.query(`INSERT INTO DEPARTAMENTOS (nome, sigla) VALUES ('${nome}', '${sigla}')`, (err, result) =>{
      res.send(result)
    })
  } else {
    res.send({
      "message": "Nome ou Sigla não foram enviados"
    })
  }
})

// Altera por completo os dados de um departamento
app.put('/departamentos/:idDepartamento', (req, res) => {
  const { idDepartamento } = req.params
  const { nome, sigla } = req.body

  if (nome != undefined && sigla != undefined) {
    con.query(`UPDATE DEPARTAMENTOS SET nome = '${nome}', sigla = '${sigla}' WHERE id_departamento = ${idDepartamento}`, (err, result) => {
      res.send(result)
    })
  } else {
    res.send({
      "message": "Nome ou Sigla não foram enviados"
    })
  }
})

// Altera parcialmente os dados de um departamento
app.patch('/departamentos/:idDepartamento', (req, res) => {
  res.send('Altera parcialmente um departamento.')
})

// Remove um departamento
app.delete('/departamentos/:idDepartamento', (req, res) => {
  const { idDepartamento } = req.params

  con.query(`DELETE FROM DEPARTAMENTOS WHERE id_departamento = ${idDepartamento}`, (err, result) => {
    res.send(result)
  })
})



app.listen(3030, () => console.log('Running server'))
