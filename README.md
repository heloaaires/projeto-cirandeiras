
<h1 align="center">
    <br>
    <p align="center"> Cirandeiras - Mulheres na Cultura Popular 🎇<p>
</h1>


<p align="center">
<img src="https://user-images.githubusercontent.com/64453332/181848069-2953bdd9-4fbc-4784-86df-169ce65d2c8c.gif" alt="logo reprogramafy" width="500">
</p> <p align="center"> </p>


<center> 
Bem-vindas! 
Este projeto é uma API REST desenvolvida como conclusão do curso de <i>desenvolvimento web back-end</i> turma On16 da [reprograma](https://reprograma.com.br). 🎉

Todas as funções CRUD são executadas para manipular um banco de dados não relacional. Para algumas funções é necessário autorização mediante login.</center>.
<br>

Documentação da API [Swagger](http://localhost:1818/documentacao/#/default) 
Aplicação disponível no [Heroku](https://cirandeiras-projeto-final.herokuapp.com/).


## 💃🏾 Apresentação
Este projeto é inspirado na segunda temporada do [Cirandeiras Podcast](https://open.spotify.com/show/4THKpW9TIBdxRWe7amFSd5?si=0a0a2e5afd074aae), onde em cada episódio conhecemos sobre a vida e luta de mulheres que são guardiãs da cultura popular em seus territórios. Através da expressão cultural, essas mulheres mantêm vivas as tradições ancestrais e ocupam espaços de lideranças - muitas vezes destinados apenas aos homens.

A trajetória dessas mulheres e a relação que elas desenvolvem com cada ritmo e dança em seus territórios resgata a formação do povo brasileiro e dá contornos a reivindicações antigas, porém tão atuais: reconhecimento e demarcação de territórios quilombolas e indígenas, preservação ambiental, autonomia e liderança feminina, leis de incentivo e fomento à cultura. 

Como diz o escritor Antônio Luiz Simas, *“não se faz festa porque a vida é boa, mas pela razão inversa. (...) as culturas de festa, pelas síncopes da festa, inventam o mundo e subvertem a miséria, inclusive existencial.”*

Não à toa, as danças e brincadeiras que acompanham cada ritmo nos revelam uma tentativa simbólica de lidar com a exploração nas relações de trabalho desde a escravidão. Sem deixar de lado o sagrado e uma certa ironia entre o festejo e a dor, os ritmos das Cirandeiras nos convidam a celebrar o nosso povo. 

Se ouvirmos os relatos de histórias das nossas famílias certamente vamos descobrir brincadeiras infantis, festejos e tradições derivadas dessas expressões culturais. Este resgate nos permite observar, por exemplo, os processos migratórios de famílias no eixo nordeste/sudeste e estabelecer conexões com o passado e nossos ancestrais. 

O objetivo desta API é guardar essa memória. ✨

Vamos lá?

<p align="center">
<img src="https://user-images.githubusercontent.com/64453332/181850464-fedb9837-620c-4faa-bc87-3ab8afe184f9.gif" alt="logo reprogramafy" width="500">
</p> <p align="center"> </p>
<br>
<br>

## 💾 Tecnologias Utilizadas 


|  Feramenta    |        Utilidade |
| ------------- | -----------------|
|[JavaScript](https://www.javascript.com) 	    |Linguagem de programação utilizada nesse projeto.| 
|[Node.js](https://nodejs.org/en/)	    |Ambiente de execução do JavaScript.
|[Git](https://git-scm.com) & [GitHub](https://github.com/) | Hospedagem do repositório e controle (versionamento de código).
|[express](https://www.npmjs.com/package/express)	    |Framework do NodeJS.
|[mongoose](https://www.npmjs.com/package/mongoose)|Dependência que interage com o MongoDB. Conecta o projeto ao banco de dados, cria os *models* e as *collections*.
|[nodemon](https://www.npmjs.com/package/nodemon)	    |Observa as atualizações realizadas nos arquivos e roda o servidor automaticamente.
|[cors](https://www.npmjs.com/package/cors)|Torna os recursos da API acessíveis na web.
|[npm](https://docs.npmjs.com/cli/v6/commands/npm-install) 	        |Gerenciador de pacotes do Node.js.
|[Mongodb](https://www.mongodb.com)	    |Banco de dados não relacional orientado a documentos.
|[Mongo Atlas](https://www.mongodb.com/cloud/atlas/register)	|Interface gráfica para verificar se os dados foram persistidos.
|[Postman](https://documenter.getpostman.com/view/16821311/UVRAHSEo)	    |Interface gráfica para realizar os testes dos protocolos http.
|[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)	|Dependência que implementa o protocolo JSON Web Token para segurança de dados.
|[bcrypt](https://www.npmjs.com/package/bcrypt)       |Biblioteca para encriptação de dados. 
|[dotenv](https://www.npmjs.com/package/dotenv)|Dependência que gerencia as variáveis de ambiente.
|[Swagger](https://www.npmjs.com/package/swagger-ui-express) |Gera a documentação do projeto. O comando [swagger-autogen] permite a atualização automática.
|[Heroku](https://www.heroku.com/)	|Hospeda a documentação.
<br>

 ## 🗃️ Arquitetura MRC 
 ```
 📁 Projeto-Cirandeiras
   |
   |- 📁 src
   |   |
   |   |- 📁 controllers
   |       |- 📑 cirandeirasController.js
   |       |- 📑 colaboradorasController.js
   |       |- 📑 ritmosController.js
   |         
   |   |- 📁 database
   |       |- 📑 mongooseConect.js
   |
   |   |- 📁 models
   |       |- 📑 cirandeirasModel.js
   |       |- 📑 colaboradorasModel.js
   |       |- 📑 ritmosModel.js
   |          
   |    |- 📁 routes
   |       |- 📑 cirandeirasRoutes.js
   |       |- 📑 colaboradorasRoutes.js
   |       |- 📑 index.js  
   |       |- 📑 ritmosRoutes.js
             
        |- 📑 app.js
   |
   |- 📁 swagger
   |   |- 📑 swagger_output.json
   |           
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js
   |- 📑 swagger.js
   ```
 <br>
 
## 📃 Funcionalidades

<center>Vamos nos inspirar na vida e trajetória de cada Cirandeira? 💃🏾</center> 
Use a API das Cirandeiras para listar todas as mulheres cadastradas e acessar as seguintes informações: 

- Nome
- Idade
- Estado onde mora e realiza suas atividades
- Ritmo 
- Trajetória dentro dessa tradição cultural
- Luta Coletiva e reivindicações atreladas às suas atividades
- Episodio do Podcast para você ouvir e se inspirar na história dessa mulher!

↪️ Podemos filtrar essa lista por *estado* ou *ritmo*.

<br>
<br> 

Por falar em ritmo...

<center>Vamos aprender mais sobre os ritmos brasileiros? Certamente você irá se surpreender com alguns que nunca ouviu falar!</center>

Use a API de Ritmos para acessar as seguintes informações 🎵:

- Nome do ritmo
- Descrição
- Origem étnica
- Contexto histórico do surgimento desse ritmo
- Brincadeiras e danças atreladas à essa expressão cultural
- Região onde surgiu
- Instrumentos utilizados

↪️ Podemos filtrar essa lista por *região* ou *origem étnica*.
<br>
Este projeto é um CRUD completo, portanto é possível executar também as seguintes funcionalidades:

- 📑 Cadastrar novas cirandeiras e novos ritmos no banco de dados
- 📑 Atualizar os dados das cirandeiras e dos ritmos
- 📑 Deletar o registro de uma cirandeira ou de um ritmo 
<br>

## 🚀 Rotas / endpoints


#### 💃🏾 Cirandeiras:
 
| Verbo  |   EndPoint      | Descrição da Rota                      | Status | Auth |
| ------ | --------------- | ---------------------------------------| ------ |----- |
| POST   | /cirandeiras    | Cadastra uma nova cirandeira          |   201  |  ✔️  |
| GET    | /cirandeiras    | Lista todas as cirandeiras cadastradas            |   200  |  ❌  |
| GET    | /cirandeiras/?estado= | Utiliza o mesmo endpoint para filtrar por estados         |   200  |  ❌  |
| GET    | /cirandeiras/?ritmo= | Utiliza o mesmo endpoint para filtrar por ritmos       |   200  |  ❌  |
| PATCH  | /cirandeiras/:id | Atualiza os dados de uma cirandeira pelo ID     |   200  |  ✔️  |
| DELETE | /cirandeiras/:id | Remove o cadastro de uma cirandeira pelo ID       |   200  |  ✔️  |
 
#### 🎵 Ritmos:
 
| Verbo  |   EndPoint      | Descrição da Rota                      | Status | Auth |
| ------ | --------------- | ---------------------------------------| ------ |----- |
| POST   | /ritmos    | Adiciona um ritmo novo         |   201  |  ✔️  |
| GET    | /ritmos    | Lista todos os ritmos cadastrados   |   200  |  ❌  |
| GET    | /ritmos/?regiao= | Utiliza o mesmo endpoint para filtrar por regiao         |   200  |  ❌  |
| GET    | /ritmos/?origem= | Utiliza o mesmo endpoint para filtrar por origem       |   200  |  ❌  |
| PATCH  | /ritmos/:id | Atualiza os dados de um ritmo pelo ID     |   200  |  ✔️  |
| DELETE | /ritmos/:id | Remove o cadastro de um ritmo pelo ID       |   200  |  ✔️  |

<br>

## 🔒 Autenticação

Para segurança dos dados deste projeto, as funções *criar, atualizar e deletar*, só podem ser executadas por colaboradoas autorizadas.
 
#### 👭🏽 Rotas/ endpoints para as colaboradoras:
 
| Verbo  |   EndPoint     |        Descrição da Rota                   | Status | Auth |
| ------ | -------------- | -------------------------------------------| ------ |----- |
| POST   | /colaboradoras | Adiciona uma nova colaboradora            |   201  |  ✔️  |
| GET    | /colaboradoras | Lista todas as colaboradoras cadastradas                |   200  |  ❌  |
| POST   | /colaboradoras/login | Devolve o token de uma colaboradora  |   200  |  ✔️  |
| DELETE | /colaboradoras/:id | Remove uma colaboradora                |   200  |  ✔️  |

<br>

## 👋🏾 Preparando o ambiente para a execução
````
Para executar este projeto, você deverá ter instalado na sua máquina o Node.js

Em seguida:

- Clone o projeto através do comando: $ git clone https://github.com/heloaaires/projeto-cirandeiras.git

- Digite no terminal o comando $ npm install

- Digite o comando $ npm start para executar o servidor
  ````   

## ⚙️ Executando a aplicação
<br>

 ✔️ ✔️ Para fazer testes no servidor local:
 
  - Crie um arquivo .env na raiz do seu projeto e lembre-se de adicioná-lo ao seu .gitignore  
  - Utilize o arquivo .env.example para veririfcar as variáveis de ambiente necessárias.  
  - Inicialize a aplicação com o comando <i>npm start</i> na pasta raiz do projeto.
  
<br>

 ✔️ ✔️ Para rodar remotamente:

 Utilize a URL do Heroku para fazer as requisições GET conforme as rotas descritas acima, ou apenas clique nos links abaixo. 
 Lembre-se de passar um valor quando uma chave estiver declarada na URL. 😉
<br>

### 💃🏾 Rotas GET para as Cirandeiras:
 - [Listar todas as cirandeiras](https://cirandeiras-projeto-final.herokuapp.com/cirandeiras)
 - [Filtrar cirandeiras por estado](https://cirandeiras-projeto-final.herokuapp.com/cirandeiras/?estado=)
 - [Filtrar cirandeiras por ritmo](https://cirandeiras-projeto-final.herokuapp.com/cirandeiras/?ritmo=)
<br>

### 🎵 Rotas GET para as Ritmos:
 - [Listar todos os ritmos](https://cirandeiras-projeto-final.herokuapp.com/ritmos)
 - [Filtrar ritmos por região](https://cirandeiras-projeto-final.herokuapp.com/ritmos/?regiao=)
 - [Filtrar ritmos por origem étnica](https://cirandeiras-projeto-final.herokuapp.com/ritmos/?origem=)
<br>
<br>

## ⭐ Melhorias pro futuro:
- Mural de artistas já falecidas para homenagear e guardar legados como o da inesquecível Zabé da Loca
- Integrar uma página dedicada à cada Cirandeira, nesta página teremos:
    - Agenda de apresentações de cada artista
    - Loja virtual de produtos ou outro meio que possa trazer um forma de sustento, já que apesar de toda a riqueza cultural que produzem, estas mulheres enfrentam dificuldades para seguir no meio artístico

<br>    

## Autoria 🙋

Este projeto foi desenvolvido por [Heloá Aires](https://www.linkedin.com/in/helo%C3%A1-aires-8140b2173/) em parceria com o [Cirandeiras Podcast](https://www.instagram.com/cirandeiraspodcast/) 🎶.

Achou interessante e quer contrubuir para o desenvolvimento de mais funcionalidades?

Escreve para a gente e vamos cirandar juntas! 💜

🤩 Projeto realizado com os recursos aprendidos no bootcamp: 
![imagem reprograma](https://user-images.githubusercontent.com/64453332/181824592-356442f6-1286-49ba-a8ce-51f6c66a71b9.png)




