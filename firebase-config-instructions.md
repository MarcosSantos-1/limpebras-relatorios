# 🔥 Configuração Firebase

## 1. Configurar Rules do Firestore

Acesse: https://console.firebase.google.com/project/relatorios-app-93aee/firestore/rules

Cole e publique:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /relatorios/{document=**} {
      allow read, write: if true;
    }
  }
}
```

## 2. Configurar Rules do Storage

Acesse: https://console.firebase.google.com/project/relatorios-app-93aee/storage/rules

Cole e publique:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /relatorios/{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

## 3. Habilitar Storage

Acesse: https://console.firebase.google.com/project/relatorios-app-93aee/storage

- Se não estiver habilitado, clique em "Começar"
- Escolha "Modo de teste" (Production depois)

## ✅ Depois de configurar, teste novamente!

