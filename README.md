# Hemanth Palakaluri — Personal Portfolio & Resume Website

A modern, high-performance developer portfolio and interactive resume website built for **Hemanth Palakaluri** (Senior Technical Lead / UI Engineering). It highlights 10+ years of building web experiences, enterprise cloud products, UI architecture, and hands-on applied AI projects.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev/)

---

## 🌟 Highlights & Features

- **Editorial Design & Aesthetics**: Tailored styling using an ink, paper, moss, and lime design palette with custom typography and subtle motion effects.
- **Enterprise Career Timeline**: Showcases leadership and engineering experience across NetApp (Active IQ, NEO, BlueXP Sustainability), Capita India, and Invendis Technologies.
- **Personal AI Builds & Experiments**: Features independent projects including:
  - **VertiPark**: Automated rotary parking concept with app reservations.
  - **SnapVend**: Smart-vending management service interface.
  - **CINEMALL**: Premium cinema discovery and seat booking flow.
  - **AI Document Intelligence**: Local document assistant powered by Gradio, RAG, and semantic search.
- **Live Visitor Counter**:
  - Tracks unique visits per user session using `sessionStorage` deduplication to prevent count inflation from refreshes.
  - Cloud-persisted visitor counts via [CounterAPI v2](https://counterapi.dev/) with fallback handling for local offline development.
  - Zero layout-shift rendering with `localStorage` caching.
- **Integrated Full-Stack Architecture**: Single-port development with Express API middleware embedded directly into the Vite dev server, deploying seamlessly to Netlify Serverless Functions.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Tailwind CSS, Lucide Icons, React Router 6 |
| **Backend** | Express 5, Serverless HTTP, Node.js |
| **API & Storage** | CounterAPI v2 (persistent visitor metrics), Local File Fallback |
| **Tooling & Build** | Vite 8, PostCSS, PNPM / NPM |
| **Testing** | Vitest for unit and route testing |
| **Deployment** | Netlify (Static SPA + Serverless Functions via `netlify.toml`) |

---

## 📂 Project Structure

```text
developer-resume-site-c4c/
├── client/                     # Frontend React Single Page Application (SPA)
│   ├── components/
│   │   ├── VisitorCounter.tsx  # Interactive live visitor counter badge
│   │   └── ui/                 # Reusable UI component library (Radix + Tailwind)
│   ├── pages/
│   │   ├── Index.tsx           # Main portfolio & resume showcase page
│   │   └── NotFound.tsx        # 404 page
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Helpers, utilities, and tests
│   ├── App.tsx                 # Root router and app setup
│   └── global.css              # Global styles & design tokens
├── server/                     # Backend API handlers (Express)
│   ├── routes/
│   │   ├── visitors.ts         # Visitor tracking API (/api/visitors)
│   │   ├── visitors.spec.ts    # Route unit tests
│   │   └── demo.ts             # Demo healthcheck endpoint
│   ├── index.ts                # Express app initialization
│   └── node-build.ts           # Standalone production Node server
├── shared/                     # Shared TypeScript interfaces (client + server)
│   └── api.ts                  # Shared request/response types
├── netlify/                    # Serverless function adapters
│   └── functions/api.ts        # Serverless HTTP wrapper for Netlify deployment
├── public/                     # Static files (favicons, robots.txt)
├── .env.example                # Example environment variables template
├── netlify.toml                # Netlify build, redirects, and function config
└── package.json                # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **Package Manager**: `npm` or `pnpm`

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/phsmartswb-ai/Personal_Website.git
cd Personal_Website
npm install
```

### 3. Environment Configuration
Create a `.env` file in the project root:
```bash
cp .env.example .env
```

Configure your environment variables in `.env`:
```env
# CounterAPI Configuration (for persistent visitor counter)
COUNTER_WORKSPACE=your_workspace_name
COUNTER_API_KEY=your_counterapi_key
INITIAL_VISITOR_COUNT=xxxx

# Optional ping test response
PING_MESSAGE="ping pong"
```

> **Note**: Sensitive `.env` files are ignored by git in `.gitignore`. Set production values in your Netlify Environment Variables dashboard.

### 4. Running Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:8080](http://localhost:8080) in your browser. Both frontend hot reloading and Express API endpoints (`/api/*`) run simultaneously on the same port.

---

## 🧪 Testing & Validation

Run the test suite and type check before committing:
```bash
# Run Vitest unit tests
npm test

# Type-check TypeScript code
npm run typecheck
```

---

## 📦 Production Build & Deployment

### Build Locally
```bash
npm run build
```
This produces:
- `dist/spa/` — Compiled production frontend assets.
- `dist/server/` — Bundled production server bundle.

### Deploying to Netlify
The repository is pre-configured with `netlify.toml`:
1. Push your repository to GitHub.
2. Link your repository in the [Netlify Dashboard](https://app.netlify.com/).
3. Netlify will automatically detect:
   - **Build Command**: `npm run build:client`
   - **Publish Directory**: `dist/spa`
   - **Functions Directory**: `netlify/functions`
   - **Redirects**: `/api/*` routed to `/.netlify/functions/api/:splat`
4. Add your `COUNTER_WORKSPACE` and `COUNTER_API_KEY` in **Site Configuration > Environment Variables**.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).