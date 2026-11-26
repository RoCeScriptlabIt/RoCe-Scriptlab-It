const CATEGORIE_ROCE = [
  { id: "AUTOCAD", it: "AutoCAD", en: "AutoCAD" },
  { id: "OFFICE", it: "Office", en: "Office" },
  { id: "MODELLI_EW", it: "Modelli Excel e Word", en: "Excel & Word Templates" },
  { id: "ALTRI", it: "Altri programmi", en: "Other Software" }
];

const CATALOGO_ROCE = [
  {
    id: "gestione-blocchi",
    categoria: "AUTOCAD",
    immagine: "img/schede/autocad-blocchi.jpg",
    titolo: { it: "Gestione Blocchi", en: "Block Manager" },
    badge: { it: "AutoLISP", en: "AutoLISP" },
    descrizione: {
      it: "Routine per ispezionare, rinominare, allineare ed esportare blocchi e attributi nei disegni CAD in modo rapido e tracciato.",
      en: "Routine to inspect, rename, align, and export CAD blocks and attributes quickly and consistently."
    },
    requisiti: {
      it: "AutoCAD / compatibili AutoLISP — Windows",
      en: "AutoCAD / AutoLISP compatible — Windows"
    }
  },
  {
    id: "automazione-cartigli",
    categoria: "AUTOCAD",
    immagine: "img/schede/autocad-cartigli.jpg",
    titolo: { it: "Automazione Cartigli", en: "Title Block Automation" },
    badge: { it: "AutoLISP", en: "AutoLISP" },
    descrizione: {
      it: "Compilazione e aggiornamento massivo dei campi del cartiglio su più layout con controllo errori prima della stampa o del PDF.",
      en: "Batch population and updating of title block fields across layouts with pre-plot or PDF validation."
    },
    requisiti: {
      it: "AutoCAD / compatibili AutoLISP — Windows",
      en: "AutoCAD / AutoLISP compatible — Windows"
    }
  },
  {
    id: "report-distinte-office",
    categoria: "OFFICE",
    immagine: "img/schede/office-report.jpg",
    titolo: { it: "Sincronizzazione Distinte Office", en: "Office Schedule Sync" },
    badge: { it: "Macro / Script", en: "Macro / Script" },
    descrizione: {
      it: "Allinea elenchi tecnici, codici e quantità tra fogli di calcolo e documenti operativi riducendo gli errori di trascrizione manuale.",
      en: "Synchronizes technical lists, codes, and quantities across spreadsheets and operational documents to cut manual errors."
    },
    requisiti: {
      it: "Microsoft Office — Windows",
      en: "Microsoft Office — Windows"
    }
  },
  {
    id: "modello-preventivo-licenze",
    categoria: "MODELLI_EW",
    immagine: "img/schede/modello-offerta.jpg",
    titolo: { it: "Modello Offerta & Licenze", en: "Quote & License Template" },
    badge: { it: "Excel + Word", en: "Excel + Word" },
    descrizione: {
      it: "Struttura pronta per calcolare postazioni, diritti d'uso o cessione e generare testi coerenti per clienti e studi tecnici.",
      en: "Ready-to-use structure to calculate seats, usage or assignment rights, and generate consistent client documents."
    },
    requisiti: {
      it: "Excel / Word o suite compatibili",
      en: "Excel / Word or compatible suites"
    }
  },
  {
    id: "rhino-estrazione-curve",
    categoria: "ALTRI",
    immagine: "img/schede/rhino-curve.jpg",
    titolo: { it: "Analisi & Esportazione Curve", en: "Curve Analysis & Export" },
    badge: { it: "Rhinoceros", en: "Rhinoceros" },
    descrizione: {
      it: "Verifica geometrie, chiude o raggruppa curve per layer e prepara dati puliti per il flusso di lavoro tecnico successivo.",
      en: "Checks geometry, groups or closes curves by layer, and prepares clean data for downstream workflows."
    },
    requisiti: {
      it: "Rhinoceros 3D — Windows",
      en: "Rhinoceros 3D — Windows"
    }
  }
];
