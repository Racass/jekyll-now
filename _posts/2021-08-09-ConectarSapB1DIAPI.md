---
layout: post
title: Conectando ao SAP B1 via DI-API!
tags: [Jekyll, Jekyll-now, jekyllnow, jekyll, now, criar, blog, github, colocar, comentários, jekyll comentarios, python, flask, primeiro-aplicativo, primeiroaplicativo, C#, c#, .net, dotnet, dot.net, sapb1, sapbusinessone, sap business one, business one, b1, sap, business, one, diapi, di, api, sdk, sap sdk, sdk, console, console app, console application, sap b1 console, servico windows, serviço windows, sap business one console, sap c#, sap sdk c# console, sap sdk c#, di api c#, conectar ao sap b1, conectar ao sap business one, conectar ao]
jsarr:
    - plugins/parser/main.js
category: [SAP-B1]
disqus: true
---

Nesse tutorial iremos aprender a conectar ao SAP Business One utilizando a DI-API, uma biblioteca fornecida pela SAP!  
Iremos utilizar C# para criar um aplicativo console, capaz de realizar a conexão.  


# Conectando ao B1!

## Criando nossa solução

Antes de codarmos, precisamos criar nosso app! Para isso, abra o Visual Studio e clique em "Novo Projeto/Solução".  

![image](https://storage.googleapis.com/rafaca-personal/blog/2021-08-09-ConectarSapB1DIAPI/image.jpg)  

Na próxima tela, selecione "Aplicativo do console(.NET Framework)", conforme segue:  

![image](https://storage.googleapis.com/rafaca-personal/blog/2021-08-09-ConectarSapB1DIAPI/Console.png)

Clique em próximo, dê um nome para o projeto, para a solução. Deixe selecionado o framework ".NET Framework 4.7.2", e então clique em criar.  

Pronto! Nosso projeto está criado.  

## Adicionando a DLL DI-API

Agora, precisamos adicionar a referência da DI-API ao nosso projeto. Para isso, abra "Gerenciador de soluções" e clique com o botão direito em "Referências" e clique em "Adicionar referência".  

![image](https://storage.googleapis.com/rafaca-personal/blog/2021-08-09-ConectarSapB1DIAPI/Referencias.png)

Na próxima tela, clique em procurar e adicione a DLL "SAPbobsCOM90.dll". Estamos assumindo que você já possua essa DLL. Caso não, basta instalar o pacote de desenvolvimento da SAP para o Business One, disponível em todos os pacotes de instalação do B1.  


## Começando a programar


Agora com o projeto e bibliotecas adicionados, vamos abrir nosso "Program.cs", ele foi criado como segue:  

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SAPB1Conector
{
    class Program
    {
        static void Main(string[] args)
        {

        }
    }
}
```

Nas 5 primeiras linhas, temos os imports padrões do C# e em seguida a declaração do ponto de entrada do nosso programa.  

Vamos remover os imports que não usamos e adicionar o import do SAP, devendo ficar como segue:  

```
using System;
using SAPbobsCOM;
[...]
```

Com os nossos imports resolvidos, vamos ir para a função "Main".  
Nela, temos o ponto de entrada do nosso programa. Ao iniciarmos devemos avisar o usuário de que estamos preparando nossa conexão, para isso iremos utilizar a função "Console.WriteLine()", disponível no namespace System, [Microsoft - Console.WriteLine](https://docs.microsoft.com/pt-br/dotnet/api/system.console.writeline?view=net-5.0).  

O Console.WriteLine recebe uma string e escreve no nosso StdOut (no caso, o Console) a string referida. Sempre recomendo a leitura da documentação.  

Após mostrar a mensagem para o usuário, vamos inicializar o objeto Company.  

O objeto company é o nosso canal com o Business One, ele é o objeto que nos permite conversar com o SAP, criarmos documentos, buscarmos documentos e demais outras necessidades.  

Então, até o momento nosso programa está como segue:  

```
[...]
static void Main(string[] args)
{
    /*Nas linhas abaixo, estamos apenas indicando ao usuário que o programa iniciou com sucesso e que iremos realizar a conexão*/
    Console.WriteLine("Olá! Bem vindo ao meu primeiro conector ao SAP Business One!"); 
    Console.WriteLine("Estou preparando algumas configurações e iremos iniciar nossa conexão, ok? :)");

    /*Na linha abaixo estamos inicializando o objeto company, que permitirá toda a nossa conversa com o Business One*/
    Company oCmp = new Company();

}
[...]
```

Com o Company criado, vamos inserir as informações de conexão no nosso objeto.  
As informações de conexão obrigatórias são:  

* Server: o IP/DNS com a porta, no formato "ENDEREÇO:PORTA" para a conexão com o SLD do Business One  
* CompanyDB: o nome da companhia/banco de dados que iremos nos conectar  
* UserName: usuário do SAP que iremos utilizar para realizar as tarefas e conexão  
* Password: Senha do usuário SAP  
* DbUserName: Usuário do banco de dados para realizar a conexão ao BD  
* DbPassword: Senha do banco de dados  
* DbServerType: Tipo do banco de dados, ano e provedor  

Todas essas propriedades estão na raiz do company. Com isso, podemos dizer o seguinte para o nosso programa:  

```

[...]

Company oCmp = new Company();

oCmp.Server = "";
oCmp.CompanyDB = "";
oCmp.UserName = "";
oCmp.Password = "";
oCmp.DbUserName = "";
oCmp.DbPassword = "";
oCmp.DbServerType = BoDataServerTypes.[...];

[...]

```

A properidade DbServerType é um enum, e possui os seguintes valores válidos:  

```
public enum BoDataServerTypes
{
    dst_MSSQL = 1,
    dst_DB_2 = 2,
    dst_SYBASE = 3,
    dst_MSSQL2005 = 4,
    dst_MAXDB = 5,
    dst_MSSQL2008 = 6,
    dst_MSSQL2012 = 7,
    dst_MSSQL2014 = 8,
    dst_HANADB = 9,
    dst_MSSQL2016 = 10
}
```

Com isso, o company já possui todas as informações para realizar a nossa conexão com o SAP.  
Agora, devemos comnadá-lo a se conectar ao banco, e buscar o resultado dessa conexão, e, em caso de erro, buscarmos a mensagem de erro e mostrarmos ao nosso usuário.  
E, claro, em caso de sucesso, avisá-lo que conseguimos conectar com sucesso.  

```
[...]
oCmp.DbPassword = "";
oCmp.DbServerType = BoDataServerTypes.[...];


if(oCmp.Connect() != 0)
{
    Console.WriteLine("Houve um erro ao conectarmos com o SAP.");
    string error = oCmp.GetLastErrorDescription();
    Console.WriteLine($"O erro foi: {error}.");
}
else
{
    Console.WriteLine("Conectamos ao SAP com sucesso!");
}
[...]
```

A função "Connect" nos retorna um inteiro. Caso esse inteiro de retorno seja 0, a conexão ocorreu com sucesso, caso contrário, o inteiro de retorno é o código do erro encontrado. Com a função "GetLastErrorDescription" podemos buscar diretamente qual foi a descrição do erro que ocorreu.  


O repositório desse projeto pode ser acessado em: [github.com/Racass/](https://github.com/Racass/MeuPrimeiroFlask/tree/main/Tutorial02/SAPB1Conector).  