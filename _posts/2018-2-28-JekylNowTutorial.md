---
layout: post
title: Como criar um blog no github usando Jekyll e Jekyll now!
tags: [Jekyll, Jekyll-now, jekyllnow, jekyll, now, criar, blog, github]
---

Esse é meu primeiro tutorial postado blog.  
O objetivo dele é, no final do tutorial você ter seu próprio blog no github, utilizando Jekyll, com a ferramenta jekyll-now.  

# Copiando o repositório para o seu github

Short: "Fork Repository" {https://github.com/barryclark/jekyll-now} -> "Fork"

Para dar um fork em um repositório do github, basta clicar no botão "FORK" no canto direito encima do repositório desejado.

# Alterando o nome do repositório

Short: {Repository} -> {settings} -> {Options}.{Repository name}

Após dar o fork, precisamos renomear o repositório para "{seu_usuario}.github.io".  
Para isso, abra o link do repositório, clique em settings e na primeira aba, "Options", ache a opção "Repository name" e altere para o padrão acima.

# Ativando o github Pages

Short: "Github Pages" on {Repository} -> {settings} -> {Options}.{Github Pages}

Repositório disponível, precisamos agora ativar o github pages.  
Para ativar o github Pages, entre no seu repositório, clique em settings, procure a seção "Github Pages" e clique em ______________ {[TODO]}  

# Configurações finais, _config.yml

Short: {Repository} -> {_config.yml} -> {edit}

Agora precisamos configurar algumas informações básicas sobre o site. Essas configurações encontram-se no arquivo _config.yml.  
Acesse ele pelo próprio github. Abaixo segue a lista das variáveis entre {} e do lado o que cada uma faz.

{name} : O nome que aparece encima do seu blog. Deve ser posto aqui o nome do seu blog.  
{Description} : A descrição curta do seu blog, o que você quer fazer nele? O que você vai postar nele? Essa descrição será apresentada logo embaixo do {name}  
{Avatar} : A imagem que irá acompanhar o seu nome no blog.  
{footer-links} : Aqui temos diversas opções, que quando preenchidas, irão adicionar o icone do site e um link para que o usuário possa acessar.  
{disqus} : coloque aqui o seu shortname do disqus para que os usuarios possam comentar.  
{google_analytics} : Adicione aqui o código de rastreamento web do google analytics para ativar o rastreametno.  
{url} : aqui você deve colocar o mesmo nome do seu repositório
{baseurl} : caso você esteja usando um github pages de projeto, e não do usuário, você deve colocar aqui a seguinte informação: {/repository_name}. No caso desse tutorial, não precisamos desse campo, deixe simplesmente "".

Após modificar o arquivo, de um commit changes.

# Site pronto

Pronto! Após essa última configuração, aguarde alguns segundos e o seu github pages estará no ar!
Caso não esteja, espere até 10 minutos conforme orientação do github. O github caso tenha algum problema com a compilação do seu site, irá enviar um e-mail para o e-mail cadastrado no seu github. Siga as instruções e não será dificil consertar o erro.


# Dúvidas

Qualquer dúvida me envie um e-mail em: rcassiolato@outlook.com


Obrigado!