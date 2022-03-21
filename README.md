# Documentação de API com Swagger
O Swagger é uma biblioteca que permite mapear e documentar uma API, listando seus endpoints juntamente com todas as informações necessárias para saber como operá-los. Após declarar-lo na raíz do projeto no arquivo principal de execução do Nest (main.ts), ele automaticamente indentifica todos os os enpoints do projetos. Também é possível por meio de decorators do Swagger declarar inforamações adicionais sobre os endpoints.

## Instalação
Para instalar os arquivos necessários para subir a aplicação, primeiramente você precisa instalar todas as bibliotecas necessárias, que são: **@nestjs/swagger** e **swagger-ui-express**.
Para instalar as bibliotecas execute o comando:

```
npm install
```

## Como rodar

Rode a aplicação utilizando o comando:
```
npm run start:dev
```
E logo após acesse no navegador a porta onde está hospedada a aplicação juntamente com a rota do Swagger. No caso desse projeto é: <a>localhost:3000/api</a><br>
Isso irá carregar página do Swagger que contém a documentação dos endpoints declarados nesse projeto, juntamente com as inforamções adicionais contidas nos endpoints por meio dos decorators do Swagger. 

## Site oficial do Swagger

https://swagger.io/

## Documentação do Swagger no NestJs

https://docs.nestjs.com/openapi/introduction

