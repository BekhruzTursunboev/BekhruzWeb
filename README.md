# Bekhruz Tursunboev | Premium Portfolio & Personal Brand Hub

An ultra-performance, single-page personal hub designed with a luxury editorial aesthetic. This project showcases premium interaction design, hardware-accelerated fluid motion, and professional SEO architecture.

Live URL: [https://bekhruz.dev](https://bekhruz.dev)

---

## ⚡ Engineering & Architecture Highlights

*   **Vite 8 & Rolldown Bundler:** Built on the bleeding edge of frontend tooling, leveraging Vite 8, native Rust-based **Oxc** transpilation, and the **Rolldown** bundler for sub-second, optimized production builds.
*   **Extreme SEO & Semantic Web:**
    *   **JSON-LD Knowledge Graph:** Custom `@graph` structured data linking the Person, Website, and ProfilePage to ensure indexing for all phonetic name variations (*Bekhruz Tursunboev, Bexruz Tursunbaev, Bekhruz Tursunbayev*).
    *   **Dublin Core Specification:** Custom metadata attributes (`DC.*`) for advanced academic and institutional crawlers.
    *   **Resource Hints:** Active `dns-prefetch`, `preconnect`, and critical asset `preload` pipelines to optimize First Contentful Paint.
*   **Dynamic Motion System:** Implements Framer Motion with custom physics configurations (spring layouts, layoutId animations) executing at a locked 120fps.
*   **Minimalist Editorial Design:** Beautiful serif-sans typographic hierarchy (Bricolage Grotesque & Manrope) set on a physical paper-texture background overlay.
*   **Mobile-First Responsive Dock:** Viewport-locked (`100dvh`) split-screen layout that converts into a floating glass-morphism dock on mobile screens.
*   **Preventing Duplicate Content:** A custom `vercel.json` configuration that injects `X-Robots-Tag: noindex` for Vercel's staging subdomains, consolidating all domain authority to the canonical URL.

---

## 🛠️ Tech Stack

*   **Framework:** React 19
*   **Bundler/Compiler:** Vite 8 (Rolldown / Oxc)
*   **Motion Engine:** Framer Motion
*   **Styling:** Vanilla CSS (Custom properties, Hardware-accelerated layouts, fluid typography clamp functions)
*   **Icons:** Phosphor Icons

---

## 📂 Project Structure

```bash
├── public/
│   ├── favicon.svg      # Responsive B-monogram (Adapts to system Dark/Light mode)
│   ├── sitemap.xml      # Google crawler indexing mapping
│   └── robots.txt       # Crawler permissions declaration
├── src/
│   ├── assets/          # Static images & icons
│   ├── App.jsx          # Core layout & Framer Motion Dock
│   ├── index.css        # Global CSS variables, viewport rules & fluid clamps
│   └── main.jsx         # App mounting entrypoint
├── vercel.json          # Deployment & bot indexing headers
└── vite.config.js       # Production bundler configurations
```

---

## 🚀 Getting Started

### Local Development
Clone the repository and install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

### Production Build
Generate a highly minified production bundle in the `dist` directory:
```bash
npm run build
```
