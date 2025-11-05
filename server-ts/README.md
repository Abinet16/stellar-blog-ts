# Blog Server (TypeScript)

## Setup

1. Copy `.env.example` to `.env` and update values.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run in development:
   ```bash
   npm run dev
   ```
4. Build:
   ```bash
   npm run build
   npm start
   ```
Endpoints:
- POST /api/auth/register {name, email, password}
- POST /api/auth/login {email, password}
- GET /api/posts
- GET /api/posts/:id
- POST /api/posts (Authorization: Bearer <token>)
