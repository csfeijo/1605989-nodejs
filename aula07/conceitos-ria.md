# O que é RIA?

RIA: Rich Internet Application´s, que basicamente são aplicações que envolvem uma API que podem ser consumidas por um Front-End.

## Do lado do Front-End

O Front-End normalmente é implementado utilizando o conceito de SPA´s (Single Page Application / São páginas que carregam só o conteudo sem precisar ser recarredas utilizando Ajax)

## Do lado do Back-End

Pode existir só uma API ou várias, e em alguns casos uma API central que consome outras para entregar dados de uma forma unica (BFF - Back-end for Front-End)

Ex.:
http://localhost:3030/alunos/claudio-junior/todos-amigos/facebook
Esse end-point entregaria todos os amigos do Facebook do aluno Claudio 

http://localhost:3030/alunos/claudio-junior/todos-amigos/instagram
Esse end-point entregaria todos os amigos do Instagram do aluno Claudio 

http://localhost:3030/alunos/claudio-junior/todos-amigos
Esse end-point entregaria todos os amigos tanto do Instagram quanto do Facebook do aluno Claudio 
