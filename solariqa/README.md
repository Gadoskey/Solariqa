# Solariqa

**Solariqa** is a developer-first Q&A hub built on the Solana ecosystem — like Stack Overflow, but for web3 builders. It enables developers to ask, answer, and collaborate in a fast, intuitive, and decentralized environment.

## 🌍 Live Deployment
[https://solariqa.vercel.app](https://solariqa.vercel.app) (Coming Soon)

---

## 🔑 Authentication
- Connect using Phantom Wallet (Solana)
- OR Sign in with Google

## 🛠 Tech Stack

| Layer     | Tech                                |
|-----------|-------------------------------------|
| Frontend  | Next.js (App Router), Tailwind CSS  |
| Backend   | Supabase (Postgres + Auth + Edge)   |
| Design    | Google Stitch + Figma               |
| Hosting   | Vercel + Supabase Cloud             |

---

## ⚙️ Local Setup

1. Clone the repo  
   `git clone https://github.com/Gadoskey/Solariqa.git`

2. Go into the project  
   `cd Solariqa`

3. Install dependencies  
   `npm install` or `yarn install`

4. Set up environment variables  
   See [`dev/env-setup.md`](./dev/env-setup.md)

5. Start the app  
   `npm run dev`

---

## 🧩 Project Structure

solariqa/
├── dev/  # Developer setup & env guides
│   └── env-setup.md
├── docs/ # Architecture diagrams, specs
│   └── architecture.md
├── public/
├── src/
│   ├── app/
│   ├── components/  # Shared UI components
│   ├── lib/  # Utility functions
│   └── styles/
├── .env.local
├── .eslintrc.json
├── LICENSE
├── README.md
├── CONTRIBUTING.md
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json


---

## 📜 License
MIT License

---

## 🤝 Contributing
Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) before submitting PRs or issues.

