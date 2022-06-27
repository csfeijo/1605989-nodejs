import { createServer } from 'http'
import { read, readFile } from 'fs'

createServer((req,res) => {
  res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8'})
  let page = ''

  switch(req.url) {
    case '/':
      page = 'index.html'
    break;
    case '/contato':
      page = 'contato.html'
    break;
    case '/produtos':
      page = 'produtos.html'
    break;
    case '/clientes':
      page = 'clientes.html'
    break;
    default:
      page = '404.html'
    break;
  }

  readFile(page, 'utf-8', (err, data) => {
    res.write(data)
    res.end()
  })

  
}).listen(3030, () => {
  console.log('Running server')
})