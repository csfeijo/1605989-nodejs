import { createServer } from 'http'


// req: request (requisicao)
// res: response (resposta)
createServer((req, res) => {
  res.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'})

  console.log('Entrou no server')
  // todas requisicoes que chegarem baterao no req.url (ex. /contato)
  if (req.url.indexOf('/contato') != -1) {
    console.log('Entrou no CONTATO')
    res.write('Contato do site')
  }

  if (req.url.indexOf('/clientes') != -1) {
    console.log('Entrou no CLIENTES')
    res.write('Clientes da empresa')
  }



  res.end()
}).listen(3030, () => {
  console.log('Running server!')
})