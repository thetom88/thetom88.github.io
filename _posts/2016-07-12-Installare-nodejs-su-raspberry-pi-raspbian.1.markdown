---
layout: post
title: Installare NodeJS su Raspberry PI con Raspbian Jessie
date:   2016-07-12 00:00:00 +0000
categories: news-comment
image: model-b.png
---
Avete un Raspberry PI? Per cosa lo usate?  
Beh, indipendentemente dall'uso che ne facciate può essere utile imparare ad usare il vostro raspi con NodeJS.  
Personalmente ho la versione 2 modello B e non posso che esserne assolutamente soddisfatto.

Io ho avuto parecchi problemi, ma finalmente sono riuscito a trovare una soluzione funzionante al 100%.

### 1. Aggiornate Raspbian all'ultima versione
Aprite un terminale e digitate i seguenti comandi:  

```bash
sudo apt-get update   
sudo apt-get upgrade
```

### 2. Rimuovere l'attuale versione di NodeJS
Non me ne sono mai accorto, ma è proprio questo che mi ha causato tanti problemi, *NodeJS è già installato*, solo è aggiornato ad una versione che definire vecchia sarebbe un eufemismo.
Rimuoviamolo!

```bash
sudo apt-get remove nodejs -y   
sudo apt-get remove npm -y
```

### 3. Aggiungete il repository corretto ed installate NodeJS
Al momento in cui scrivo la major version più aggiornata è la 6, vi basta un controllino sul sito per verificare se vi sia un aggiornamento.
In caso, basta sostituire al comando di cui sotto 6 con il numero della versione che volete installare ed il problema è risolto.  

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -  
sudo apt-get install -y nodejs
```

### 4. Verifica dell'installazione
```bash
node -v 
npm -v
```

Et Voilà, Avete installato NodeJS sul vostro Raspberry PI!