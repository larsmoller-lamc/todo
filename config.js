// Arnevangen 35 – opgaver: konfiguration
// Udfyld fra Firebase-konsollen: Projektindstillinger → Dine apps → Web-app → SDK-konfiguration.
// Tom apiKey = lokal tilstand (gemmer kun i browseren).
window.FIREBASE = {
  apiKey: "AIzaSyBCWMlchHD1012LHk3XpemlJgKCJKmiJoA",
  authDomain: "todo-e367c.firebaseapp.com",
  projectId: "todo-e367c",
  storageBucket: "todo-e367c.firebasestorage.app",
  messagingSenderId: "151349380754",
  appId: "1:151349380754:web:748515b4ade36fb38c084b",

  collection: "opgaver",   // Firestore-collection
  requireLogin: true,      // Google-login før data vises (anbefales – siden er offentlig på GitHub Pages)
  allowedEmail: "larsmollerchristensen@gmail.com"         // fx "lars@…" – kun denne konto får adgang. Tom = alle der logger ind.
};
