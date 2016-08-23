---
layout: post
title: Excel - Definire una base dati dinamica per una tabella Pivot
date:   2016-06-15 00:00:00 +0000
categories: Excel
---
Non avete mai avuto la necessità, lavorando con le tabelle pivot in Excel, di poterne definire in modo dinamico la base dati?  
In questo modo qualsiasi modifica facciate alla base dati come l'inserimento di una colonna o l'inserimento di più righe, basterà un aggiornamento della tabella(```Alt+F5```).

Farlo è estremamente semplice.  
&Egrave; necessario definire un nome, per farlo basta andare su Formulas-->Name manager-->New ed assegnare un nome identificativo al nome che stiamo definendo.  
Supponendo che il Foglio che contiene la base dati si chiami 'DATI' è sufficiente definire un nome con la seguente formula:  

```
=OFFSET(DATI!$A$1;0;0;COUNTA(DATI!$A:$A);COUNTA(DATI!$1:$1))
```

Oppure in caso abbiate Excel in italiano (sia sempre maledetta la traduzione delle formule):

```
=SCARTO(DATI!$A$1;0;0;CONTA.VALORI(DATI!$A:$A);CONTA.VALORI(DATI!$1:$1))
```

Fatto questo è sufficiente inserire nella definizione della base dati della tabella pivot l'identificatore che avete appena assegnato al vostro nome.

Fine!