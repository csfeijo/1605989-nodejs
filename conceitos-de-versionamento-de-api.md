# Versionamento de API

* Uma API ela DEVE manter compatibilidade com os produtos que a usam mesmo tendo atualizações.

* Caso algo mude drasticamente na estrutura ou rotas deve-se entregar o novo padrão recebendo um HEADER ou ROTA de versão
Ex.:
Rotas:
v1: localhost:3030/departamentos
v2: localhost:3030/v2/departamentos

Header:
version=2
localhost:3030/departamentos

* Deve-se sempre a cada alteração (_release de uma nova versão_) entregar um changelog (_o que mudou_).


