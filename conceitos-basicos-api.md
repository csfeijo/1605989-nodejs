# Conceitos Básicos de REST API (pattern/padrão)
## Quando queremos consultar uma informação (listar):
Método GET
Ex. end-point: http://localhost:3030/departamentos

## Quando queremos consultar um registro específico:
Método GET
Ex. end-point: http://localhost:3030/departamentos/23 - (entidade/id)

## Quando queremos criar um novo registro:
Método POST
Ex. end-point: http://localhost:3030/departamentos

## Quando queremos atualizar um registro:
Método PATCH ou PUT
PATH: atualização de parte do conteúdo do dado (_ex. alteramos somente o atributo sigla do depto._)
PUT: atualização do dados por completo (_ex. alteramos TODOS os campos do depto._)
Ex. end-point: http://localhost:3030/departamentos/23 - (entidade/id)

## Quando queremos remover um registro:
Método DELETE
Ex. end-point: http://localhost:3030/departamentos/23 - (entidade/id)

## Corpo da requisição
Para enviar dados para um end-point normalmente enviamos no corpo da requisição (body).
O nome dessa estrutura de dados enviada é o Payload da request.


