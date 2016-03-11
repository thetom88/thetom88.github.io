---
layout: post
title: Come creare un sito statico con GitHub Pages e Jekyll
date:   2016-03-10 00:00:00 +0000
categories: guida-jekyll
---
Il sito che stai visitando è realizzato con Jekyll ed ospitato dalle pagine di GitHub([GitHub Pages][github-pages]).<br>
**Figo?**<br>
**Figo!**<br>
Lo vogliamo anche noi!

Bene, di seguito vi spiegherò come farlo.

<h3>Requisiti:</h3>
1. Sistema Linux(non strettamente necessario ma vi semplifica la vita)
2. Ruby 
3. Git
4. Un account [GitHub][github]
3. Una ventina di minuti

<h3>1. Crea un nuovo Repository</h3>

Collegati a <a href="https://github.com" target="_blank">https://github.com</a> e crea un nuovo repository con nome uguale al tuo username, esempio: USERNAME.github.com .
Nel mio caso thetom88.github.com. 
<blockquote>
  <p>In seguito per convenzione userò il mio username (thetom88), sostituitelo con il vostro!</p>
</blockquote>

<h3>2. Crea un repository locale e collegalo al repository remoto</h3>

Crea una cartella dove inserirai il progetto, crea il repository locale e collegalo al repository remoto:

<pre>
mkdir CARTELLA_DEL_PROGETTO
cd CARTELLA_DEL_PROGETTO
git init
git remote add origin https://github.com/thetom88/thetom88.git
</pre>

<h3>3. Installa Jekyll ed il plugin GitHub Pages</h3>
Occorre innanzitutto installare il gem di Jeckyll e quello di GitHub Pages. Per farlo ci conviene sfruttare il gemfile per poi ricreare l'ambiente in caso di necessità in un secondo momento.<br>
Create quindi nella vostra directory del progetto un file di nome ```.Gemfile``` e copiate il successivo contenuto al suo interno:

<pre>
source 'https://rubygems.org'
gem 'jekyll'
gem 'github-pages'
</pre>

A questo punto installate il tutto con il comando ``` bundle install ```

<h3>4. Crea il tuo sito con Jekyll</h3>
Niente di più facile, basta lanciare il comando ```jekyll new ./ ```  che si occuperà di creare tutto il necessario.

Per visualizzare il tuo sito, Jekyll mette a disposizione un piccolo server locale, ti basterà lanciare il comando  ```jekyll serve ``` e collegarti con un browser alla pagina indicata.

L'altra grande comodità che ci fornisce jekyll con il comando serve è il watching dei files. Cosa vuol dire? Che Jekyll controllerà tutti i files nel progetto e si occuperà
di ricreare il website così che tu debba solo fare un refresh della pagina ogni volta che farai una modifica. **Spettacolo!** 

Per fermare tutte queste fantasticherie ti basterà premere <kbd><kbd>ctrl</kbd> + <kbd>c</kbd></kbd>

<h3>5. Pubblica il sito sulla tua pagina di GitHub</h3>
Molto molto semplice, innanzitutto devi aggiungere i files del progetto appena creato al repository:
<pre>git add .</pre>
Poi devi creare un nuovo commit:
<pre>git commit -am "Il mio primo commit sulla mia GitHub Page!"</pre>
Ed infine devi caricare il tutto:
<pre>git push origin master</pre>
Ora ti verrà chiesto il tuo username e la tua password.
Fatto questo potrai andare finalmente a vedere la tua GitHub Page!

[github-pages]: https://pages.github.com
[github]: https://github.com