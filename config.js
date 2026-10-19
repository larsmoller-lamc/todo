// Arnevangen 35 – opgaver: konfiguration
// Udfyld fra Firebase-konsollen: Projektindstillinger → Dine apps → Web-app → SDK-konfiguration.
// Tom apiKey = lokal tilstand (gemmer kun i browseren).
window.FIREBASE = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",

  collection: "opgaver",   // Firestore-collection
  requireLogin: true,      // Google-login før data vises (anbefales – siden er offentlig på GitHub Pages)
  allowedEmail: ""         // fx "lars@…" – kun denne konto får adgang. Tom = alle der logger ind.
};
