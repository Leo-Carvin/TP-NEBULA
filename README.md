# TP-NEBULA
Nebula_Resilience_Protocol

# TP-NEBULA

## 🛰️ Présentation

TP-NEBULA est un **dashboard web de supervision du réseau électrique urbain**.  
Il permet de visualiser les **pics de charge du réseau** et d’identifier rapidement les situations critiques grâce à un **indicateur visuel vert / rouge**.

Le projet simule un contexte où **NeoGrid gère 40 % du réseau électrique urbain**, avec une infrastructure legacy incapable de gérer les pics de charge actuels.

---

## 🎯 Objectifs du projet

- Visualiser l’état global du réseau électrique
- Identifier rapidement les situations de surcharge
- Afficher l’évolution de la charge dans le temps
- Mettre en place une architecture moderne (Front / Back / Docker)

---

## 🧱 Stack technique

### Frontend
- React
- Vite
- JavaScript

### Backend
- Node.js
- NestJS
- API REST

### Données
- PostgreSQL (SQL)
- MongoDB (NoSQL)

### Infrastructure & DevOps
- Docker
- Docker Compose
- Git Flow

---

## 📁 Structure du projet



---

## ⚙️ Prérequis

Assurez-vous d’avoir installé :

- Node.js >= 18
- npm >= 9
- Git
- Docker & Docker Compose (optionnel mais recommandé)

Vérification :
```bash
node -v
npm -v
git --version
docker --version

1 : Cloner le dépôt
git clone <URL_DU_REPO_GITHUB>
cd TP-NEBULA

2 : Lancer le backend (API NestJS)
cd backend
npm install
npm run start:dev

3 : Lancer le frontend (Dashboard React)

Ouvrir un nouveau terminal :

cd frontend
npm install
npm run dev

