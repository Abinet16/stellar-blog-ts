# 🌟 Stellar Blog TS

A modern full-stack **TypeScript** blog platform that blends performance and beauty.  
Frontend built with **Next.js 14**, **TailwindCSS**, and **shadcn/ui**, backed by a robust **Express + MongoDB** API written in TypeScript.

---

## 🚀 Features

- 🪄 **Next.js + TypeScript** – Modern React framework with full type safety.
- 🎨 **TailwindCSS + shadcn/ui** – Stunning, responsive, and accessible UI.
- 🔐 **JWT Authentication** – Secure login and registration flow.
- ✍️ **Rich Post Management** – Create, edit, and explore blog posts.
- 🌗 **Dark/Light Mode** – Theme switcher powered by Tailwind tokens.
- ⚡ **Full REST API** – Typed endpoints with Express + Mongoose.
- 🧱 **Scalable Architecture** – Clearly separated client and server.

---

## 🗂️ Project Structure

stellar-blog-ts/
├── client-nextjs-shadcn/ # Next.js 14 + TypeScript + Tailwind + shadcn/ui
│ ├── app/ # App router pages
│ ├── components/ # Reusable UI components
│ ├── lib/ # Helpers and API functions
│ └── styles/ # TailwindCSS globals
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
Create .env.local in client-nextjs-shadcn/:

env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:4000
Create .env in server-ts/:

env
Copy code
MONGO_URI=mongodb+srv://<your-mongo-uri>
JWT_SECRET=supersecretkey
PORT=4000
🧭 Available Routes
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user

Posts
Method	Endpoint	Description
GET	/api/posts	Get all posts
GET	/api/posts/:id	Get post by ID
POST	/api/posts	Create new post (requires JWT)

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
Minimal, glass-inspired card design

Smooth transitions and hover effects

Theme switch (light/dark)

Fully responsive layouts

🧩 Future Enhancements
🖋️ Rich text/Markdown editor

🖼️ Image upload for posts

🧑‍💼 User profile pages

🪶 Comment and like system

🚀 Docker + CI/CD deployment

🧑‍💻 Author
Abenet Shegaw (Taborye)
💼 Software Engineer | Front-End & Full-Stack Developer
🌐 Portfolio
📧 abinetshegaw@gmail.com
🐦 Twitter | 💻 LinkedIn

🪄 License
This project is licensed under the MIT License — free for personal and commercial use.

“Code is not just logic — it’s poetry that machines can understand.”
