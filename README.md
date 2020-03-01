<h1 align="center">
    🚀 MaratonaDev - Projeto Doe Sangue
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

![Screenshot_1](https://user-images.githubusercontent.com/43863949/74798768-6f660c00-52ad-11ea-8582-5e43ab301145.png)

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)

## 💻 Projeto

- o projeto deve ser capaz de salvar em um banco de dados os dados de usarios que optarem por doarem
- apresentar os ultimos doadores cadastrados

## Instalação do Bando de Dados

Baixe no site oficial e instale o [PostgreSQL](https://www.postgresql.org/download/)

Baixe e instale o cliente visual [PostBrid](https://www.electronjs.org/apps/postbird) para manipular os bancos e as tabelas.

- crie um banco de dados chamado "doe"
- crie uam tabela chamada "donors"
- adcione 3 campos do tipo texto ('name','email','blood')

Configure com os dados do banco no arquivo server.js

```sh
const db = new pool({   
user: 'postgres',   //seu nome de usuario    
password: '0000',   //seu password cadastrado    
host: 'localhost',  //host de acesso ao banco de dado    
port: 5432,         //a porta de comunicação com o BD    
database: 'doe'     //o nome do banco de dados criado
})
```
### Dependencias
- Você vai precisar instalar o [node.js](https://nodejs.org/pt-br/) na sua maquina.
- [Express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node
- [nodemon](https://www.npmjs.com/package/nodemon) - To automatically restarting the node application when file changes
- [nunjucks](https://www.npmjs.com/package/nunjucks) - Templating engine for javascript
- [pg](https://www.npmjs.com/package/pg) - PostgreSQL client for Node.js
 
Você precisará instalar todas as dependencia do projeto encontradas no arquivo packge.json