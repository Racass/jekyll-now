---
layout: post
title: Como adicionar comentários ao seu Jekyll Now!
tags: [Jekyll, Jekyll-now, jekyllnow, jekyll, now, criar, blog, github, colocar, comentários, jekyll comentarios, disqus]
jsarr:
    - plugins/parser/main.js
category: [Jekyll]
disqus: true
---

Nesse tutorial veremos como colocar comentários no seu blog jekyl.  
Para iniciar, crie uma conta em [Disqus](https://disqus.com).  
Você poderá usar o facebook, gmail ou twitter.

# Gerando uma página no Disqus

## Iniciando

Clique no ícone do seu perfil e em "View Profile".  
Após abrir seu perfil, clique nas engrenagens, nas configurações. Entre na opção "Add Disqus To Site". Desça até o final da página e clique em "Get Started".  
Na nova página, clique em "I want to install Disqus on my site".

## Configurando  

Em WebSiteName coloque o nome do seu blog, a sua disqus URL será "WebSiteName".disqus.com, embaixo coloque a categoria do seu blog embaixo, o que você irá falar sobre?
Por último, selecione a lingua do seu blog. Note que não tem pt-br.  

## Selecionando o plano

O disqus possui diversas formas de pagamento e planos. Nós iremos focar no plano "Basic", que é gratuito. Clique em "Subscribe now".

## Escolhendo a plataforma

Nessa nova tela, você deve escolher a plataforam Jekyll. Basta procurar o ícone e clicar encima dele.

## Finalizando o disqus

Para finalizar, clique no fim da página em "Configure". Nessa nova página apenas temos configurações opcionais. Não iremos focar nelas agora.  

## Adicionando o disqus ao seu blog Jekyll Now

### Alterando o _config.yml

No seu arquivo _config.yml, por volta da linha 37, você terá a variável "disqus: " coloque lá seu shortname, sem o ".disqus.com". Por exemplo: "disqus: racass" seria o caso do meu blog :).
Salve o arquivo.  

### Nos seus posts adicione a variável disqus: true

Os seus posts deverão ficar com essa cara:  
    layout: post  
    title: Como criar um blog no github usando Jekyll e Jekyll now!  
    disqus: true  
  
    "CONTEUDO DO SEU POST"  
