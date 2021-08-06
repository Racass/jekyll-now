---
layout: post
title: Criando meu primeiro app utilizando o flask!
tags: [Jekyll, Jekyll-now, jekyllnow, jekyll, now, criar, blog, github, colocar, comentários, jekyll comentarios, python, flask, primeiro-aplicativo, primeiroaplicativo, web, flask, flaskweb, hello world, helloworld, python hello world, python hello world]
jsarr:
    - plugins/parser/main.js
category: [Flask]
disqus: true
---

Essa será uma série de artigos-tutorial de como criarmos nosso primeiro aplicativo web em python, utilizando o framework flask. 

# MyFlaskApp 

## Iniciando o projeto

Primeiro, vamos iniciar nosso ambiente virtual:

```
python -m virtualenv venv
```

<details>
    <summary> Caso não tenha virtualenv instalado </summary>

Caso você não tenha o virtualenv, basta executar:

```
pip install virtualenv
```

</details>

Agora que instalamos o ambiente virtual, podemos instalar o flask. Utilize o pip para isso.  

```
pip install flask
```

No momento desse tutorial, estamos utilizando a versão mais recente, que é a: 2.0.1  

Com o flask instalado, vamos criar nosso primeiro arquivo python, o app.py.  

Até o momento, nossa estrutura de diretório está como segue:  

```
├── MeuPrimeiroFlask/  
| ├── venv/  
| ├── app.py  
```

No arquivo app.py será onde colocaremos todas as configurações do FLASK.

A primeira coisa que devemos fazer é importar o flask no nosso arquivo:  

```
from flask import flask
```

Para colocarmos nossas configurações e iniciarmos o nosso aplicativos, devemos instanciar o flask.
Isso é feito conforme segue:

```
app = Flask(__name__)
```

### Uma análise no objeto da nossa aplicação

Vamos entender um pouco melhor o nosso objeto, pois nele poderemos ter total controle sobre nossa aplicação.

> O objeto Flask implementa uma aplicação WSGI e é o nosso ponto central de todo sistema. Nós enviamos o nome do módulo ou pacote da aplicação. Uma vez criado, ele age como um registro central para as funções de view, regras de URL, configurações de templates e muito mais.  

[Referência API - Flask](https://flask.palletsprojects.com/en/2.0.x/api/#application-object)


O parâmetro que enviamos permite que o flask nos ajude no debug, permite ele a procurar arquivos no sistema importantes para nossa aplicação e muito mais.  


## Criando nossa primeira rota

Criado nosso objeto da aplicação, podemos começar a inserir rotas nele.  
Para nossa primeira rota, usaremos o decorador @app.route(), e embaixo dele colocaremos nossa função da rota.  

```
@app.route('/')
def hello():
    return 'Hello, world!'
```

## Rodando nosso aplicativo

Para fazer funcionar, temos 2 opções distintas. Irei começar pelas mais comuns, e por último irei mostrar a forma que mais gosto.  

### Flask Run

Para utilizarmos o flask run, precisamos setar a variável de ambiente FLASK_APP.  
Para isso, abra um terminal, ative o seu ambiente virtual e entre com o comando:  

```
SET FLASK_APP=app.py
```

Após ativarmos nossa variável, basta chamar o comando:  

```
FLASK RUN
```

Pronto, nosso primeiro aplicativo está funcionando em nosso ambiente de desenvolvimento!  

### Utilizando um run.bat auxiliar

Quando executamos um aplicativo flask de grande porto, com muitas rotas, banco de dados, configurações e que funciona em vários ambientes (produção, homologação, desenvolvimento), muitas vezes separamos algumas configurações com variáveis de ambientes e afins.  
  
Portanto, eu sempre gosto de deixar a ferramenta pronta para receber esses parâmetros, e tenho alguns arquivos .bat para me ajudar.  
  
Nesses arquivos eu faço algumas configurações de ambiente e, ao final, seto as variáveis e executo o "FLASK RUN".  
  
Para nosso caso, esse arquivo será bem simples, contendo apenas:

```
cd venv/Scripts && activate && cd ../..

SET FLASK_APP=app.py
FLASK RUN
```

E quando quero rodar o meu sistema, apenas chamo "run" no terminal.  


## Acessando nossa rota

Quando nosso aplicativo estiver rodando, receberemos a seguinte mensagem no terminal:  

```
(venv) E:\RCATech\GIT\MeuPrimeiroFlask>flask run
* Serving Flask app 'app.py' (lazy loading)
* Environment: production
 WARNING: This is a development server. Do not use it in a production deployment.
 Use a production WSGI server instead.
* Debug mode: off
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

Para acessarmos nosso hello world, abra o link em qualquer navegador.


## Diretório final


Nossa estrutura final de arquivos ficou como segue:

```
├── MeuPrimeiroFlask/  
| ├── venv/  
| ├── app.py
| ├── run.bat  
```


## Acessando o repositório desse tutorial

Estarei disponibilizando, ao final de cada arquivo, uma versão do repositório será disponibilizada para que todos possam acessar.  

[Link do repositório](https://github.com/Racass/MeuPrimeiroFlask/tree/main/Tutorial01)
