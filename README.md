# 🌟 Stellar Blog TS

A modern full-stack **TypeScript Blog Platform** — built with passion, precision, and purpose.  
Crafted with **Next.js 14**, **TailwindCSS**, and **shadcn/ui** on the frontend, and powered by a **Node.js + Express + MongoDB** backend — all fully typed for elegance and reliability.

> “A blog is more than words — it’s a symphony of thought and design.”

---

## 🚀 Features

- 🪄 **Next.js + TypeScript** – Modern React framework with static, dynamic, and server components.
- 🎨 **TailwindCSS + shadcn/ui** – Refined, responsive, and accessible design system.
- 🔐 **JWT Authentication** – Secure login and registration flow.
- ✍️ **Rich Post Management** – Create, edit, and explore posts effortlessly.
- 🌗 **Dark/Light Mode** – Toggle themes with smooth transitions.
- ⚡ **RESTful API** – Fully typed Express + Mongoose backend.
- 🧱 **Scalable Architecture** – Modular and production-ready structure.

---

## 🗂️ Project Structure

stellar-blog-ts/
├── client-nextjs-shadcn/ # Next.js 14 + TypeScript + Tailwind + shadcn/ui
│ ├── app/ # App router pages
│ ├── components/ # Reusable UI components
│ ├── lib/ # Utilities and API handlers
│ └── styles/ # TailwindCSS styles
└── server-ts/ # Express + MongoDB + TypeScript backend
├── src/controllers/
├── src/models/
├── src/routes/
└── src/utils/

yaml
Copy code

---

## ⚙️ Setup

### 🖥️ 1. Clone the repository
```bash
git clone https://github.com/yourusername/stellar-blog-ts.git
cd stellar-blog-ts
💾 2. Install dependencies
Client

bash
Copy code
cd client-nextjs-shadcn
npm install
npm run dev
Server

bash
Copy code
cd server-ts
npm install
npm run dev
🔐 Environment Variables
Client – .env.local
env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:4000
Server – .env
env
Copy code
MONGO_URI=mongodb+srv://<your-mongo-uri>
JWT_SECRET=supersecretkey
PORT=4000
🧭 API Routes
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user

Posts
Method	Endpoint	Description
GET	/api/posts	Fetch all posts
GET	/api/posts/:id	Fetch post by ID
POST	/api/posts	Create new post (JWT required)

🧠 Tech Stack
Frontend
Next.js 14

TypeScript

TailwindCSS

shadcn/ui

Axios / React Query

Backend
Node.js + Express

TypeScript

MongoDB + Mongoose

JWT Authentication

🎨 UI Highlights
Minimal glassmorphic cards and elegant typography

Dark/light theme with instant transitions

Shadcn components for delightful interactivity

Fully responsive layout across devices

🧩 Future Enhancements
🖋️ Markdown/Rich-text editor

🖼️ Image uploads

🧑‍💼 User profiles & avatars

💬 Comment and like systems

🚀 Docker + CI/CD deployment setup

🧑‍💻 Author
Abinet Shegaw (Taborye)
💼 Software Engineer | Front-End & Full-Stack Developer

🌐 Portfolio: abinet.netlify.app
💼 LinkedIn: linkedin.com/in/abenetshegaw16
🐦 Twitter (X): x.com/Atersata7

🪄 License
This project is licensed under the MIT License — free for personal and commercial use.

“Code is the language of stars — and you, the poet who arranges them into constellations.”
