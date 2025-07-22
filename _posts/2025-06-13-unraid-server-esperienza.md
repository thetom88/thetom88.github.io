---
layout: post
title: "Il mio home server"
date: 2025-06-13
---

Negli ultimi anni ho sentito l’esigenza di avere un server domestico flessibile, affidabile e facile da gestire. Dopo aver valutato diverse soluzioni, la mia scelta è ricaduta su **Unraid**. In questo post racconto i motivi della mia scelta, la mia esperienza d’uso, un confronto con alternative simili e la mia configurazione hardware.

## Perché Unraid?

**Unraid** si distingue per alcune caratteristiche che, per il mio caso d’uso, sono risultate decisive:

- **Elasticità nell’utilizzo dei dischi**: posso utilizzare dischi di dimensioni e marche diverse, aggiungerne di nuovi nel tempo senza dover pianificare la struttura in anticipo o migrare dati.
- **Interfaccia semplice**: la dashboard web è intuitiva, chiara e permette di gestire array, pool, dockers e VM senza difficoltà.
- **Sicurezza**: la presenza del disco di parità protegge i dati da guasti hardware, e la gestione dei permessi è efficace.
- **Community attiva**: la documentazione è ampia e la community è sempre pronta a dare supporto.

## Unraid vs altre soluzioni

Prima di scegliere Unraid, ho valutato:

- **TrueNAS** (ex FreeNAS): ottimo per chi cerca ZFS e snapshot avanzati, ma richiede dischi uguali e una pianificazione più rigida dell’array. L’interfaccia è migliorata ma resta più tecnica.
- **OpenMediaVault**: molto flessibile e open source, ma la gestione di array misti e l’espansione non sono immediate come su Unraid. L’interfaccia è meno moderna.
- **Proxmox**: eccellente per la virtualizzazione, ma meno orientato allo storage misto e alla semplicità d’uso per un NAS domestico.

Unraid, per il mio scenario, rappresenta il miglior compromesso tra flessibilità, semplicità e sicurezza.

## La mia configurazione hardware

### 🖥️ Hardware
- **Scheda madre**: MSI B450 TOMAHAWK MAX II (MS-7C02)
- **CPU**: AMD Ryzen 5 3600 (6 core / 12 thread)
- **RAM**: 32 GB DDR4 (2x16 GB)
- **GPU**: NVIDIA GeForce GTX 1070 (usata per transcoding o VM)

Ho scelto di usare AMD AM4 perchè lo ritengo più economico e mi avrebbe garantito upgrade economici in futuro(potrei arrivare a 16 core) con un consumo tutto sommato decoroso(50W in idle). 

### 🧾 Dispositivi di storage

#### Array (con parità)
<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>Nome</th><th>Modello</th><th>Dimensione</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Parity</td><td>ST8000VN004-3CP101 (Seagate)</td><td>8 TB</td></tr>
    <tr><td>Disk 1</td><td>ST4000VN008-2DR166 (Seagate)</td><td>4 TB</td></tr>
    <tr><td>Disk 2</td><td>WDC WD30EFRX-68EUZN0 (WD Red)</td><td>3 TB</td></tr>
    <tr><td>Disk 3</td><td>ST4000VN008-2DR166 (Seagate)</td><td>4 TB</td></tr>
    <tr><th colspan="2">Totale</th><th>11 TB</th></tr>
  </tbody>
</table>

#### Pool (cache)
<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>Nome</th><th>Modello</th><th>Dimensione</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Cache</td><td>CT480BX500SSD1 (Crucial)</td><td>480 GB</td></tr>
    <tr><td>VM_cache</td><td>SanDisk SDSSDA120G</td><td>120 GB</td></tr>
  </tbody>
</table>

---

**In sintesi:** Unraid mi ha permesso di costruire un server domestico potente, espandibile e facile da gestire, senza compromessi sulla sicurezza dei dati e con la libertà di scegliere e aggiungere dischi secondo le mie esigenze. Consigliato a chi cerca un NAS versatile e user-friendly!
