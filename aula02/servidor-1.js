import { createServer } from 'http'
import { currentDate } from './currentDate.js'
import getName from './myName.js'

createServer((req, res) => {
  // retorna código 200 => requisicao feita com sucesso
  // informa que o tipo de conteudo é html e usa utf-8
  res.writeHead(200, { 
    'Content-type' : 'text/html; charset=utf-8',
    'Header-customizado': 'Cicero'
  })
  
  const anoAtual = currentDate().getFullYear()
  const hora = currentDate().getHours()
  const min  = currentDate().getMinutes()
  const seg  = currentDate().getSeconds()
  const horaFull = `${hora}:${min}:${seg}`

  // res.end(`<h1>Isso é um servidor HTTP da Aula 02!</h1> ${anoAtual} - ${horaFull} <br> ${getName()}`)
  res.end('{"nome": "Cicero", "idade": "40" }')

}).listen(3030, () => {
  console.log('Running server!')
})