# Casos de Uso do NodeJS no Back-end
## APIS
### end-point:
http://localhost:3030/departamentos
- Conenctando em um MySQL
- Fazendo um "select * from departamentos"
- Retornando para o response um JSON com os departamentos
  Ex.: [{"id_departamento":1, "nome": "Rec. Human.", "sigla": "RH"}]

http://localhost:3030/departamentos/23
- Conenctando em um MySQL
- Fazendo um "select * from departamentos where id = 23"
- Retornando para o response um JSON com o departamento
  Ex.: [{"id_departamento":23, "nome": "Financeiro", "sigla": "FIN"}]

## Desenvolve Aplicações Web de Conteudo (Site)
http://localhost:3030/contato
- Pegar um HTML do disco
- Retornar o response com o conteudo do HTML pela rota

## CRUD - Create Read Update & Delete
- Implementa um SISTEMA que permite usar um Front-End para manipular os dados do banco

