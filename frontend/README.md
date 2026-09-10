# Anytime Diesel — React Frontend Replica & Q&A Chatbot

A high-fidelity, responsive React replica of [Anytime Diesel](https://anytimediesel.com/) built with **React**, **Vite**, and **Tailwind CSS**, styled with the official Barlow font and authentic downloaded assets (PESO & ISO certification badges, official logos, icons, video backgrounds, and media). Includes a floating **24/7 Company Q&A AI Chatbot** with preloaded company knowledge.

---

## 🚀 Features

- **Pixel-Accurate Branding & Design System**:
  - Exact brand palette: Anytime Gold (`#FCD30A`), Anytime Red (`#EE3427`), Deep Dark (`#04000B`).
  - Google Fonts *Barlow* typography.
  - Dark / Light mode switcher.
- **Downloaded Official Assets**:
  - Official brand logo, PESO-approved & ISO-certified badges, app store links, and high-res fuel cube assets stored in `public/assets/`.
- **Complete Replicated Homepage Sections**:
  - **Header / Navbar**: Sticky header with blur backdrop, contact CTA (`+91 9494455555`), and animated mobile drawer.
  - **Hero Section**: High-impact headline, background video overlay (`abstract.mp4`), app store download buttons, and trust badges.
  - **Interactive Multi-Section Showcase**: 3-step visual ordering process, ATD Smart Fuel Cube storage, and Fuel For Trees green initiative.
  - **7 Value Pillars (Why Choose Us)**: Pure Fuel, Accurate Delivery, Fair Price, No Downtime, Time Efficient, Fully Compliant, Smart Dashboard.
  - **Action Media Gallery**: Visual showcase of automated bowsers and IoT pods.
  - **Impact Stats & Numbers**: 10M+ Litres Delivered, 5000+ Clients, 100% PESO Compliant, 30 Min Dispatch.
  - **Services Showcase**: Tailored solutions for IT Parks, Hospitals, Construction, Manufacturing, Logistics, and Agriculture.
  - **Testimonials Carousel**: Verified client reviews and 4.8 / 5.0 score highlight.
  - **Partner With Us**: High-ROI Franchise and corporate alliance callout.
  - **Contact & Inquiry Form**: Hyderabad headquarters details, phone, email, and interactive fuel requisition form.
  - **Comprehensive Footer**: Service hubs across India, quick links, legal terms, and social links.
- **Interactive Company Q&A Chatbot**:
  - Floating Action Button (FAB) at bottom-right.
  - Preloaded knowledge base answering inquiries about order placement, fuel pricing, PESO safety, service locations, and ATD Fuel Cubes.

---

## 🛠️ Quick Start with Docker

### Option 1: Docker Compose (Recommended)
```bash
docker compose up --build
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Option 2: Docker Bun
```bash
# Run Dev Server
docker run --rm -it -p 5173:5173 -v $(pwd):/app -w /app oven/bun:latest bun run dev --host 0.0.0.0

# Build Production Bundle
docker run --rm -v $(pwd):/workspace -w /tmp/app oven/bun:latest sh -c "cp -r /workspace/. /tmp/app && cd /tmp/app && bun install && bun run build && cp -r /tmp/app/dist /workspace/"
```

### Option 3: Local Bun / NPM
```bash
bun install
bun run dev
# or
npm install
npm run dev
```

---

## 📁 Directory Structure

```
├── public/
│   └── assets/             # 88 downloaded official images, icons, and videos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MultiShowcase.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── ActionGallery.jsx
│   │   ├── ImpactStats.jsx
│   │   ├── ServicesShowcase.jsx
│   │   ├── Testimonials.jsx
│   │   ├── PartnerCTA.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Chatbot/
│   │       ├── ChatWidget.jsx
│   │       └── chatKnowledge.js
│   ├── data/
│   │   └── companyData.js  # Structured company knowledge & content
│   ├── App.jsx             # Main layout combining all sections
│   ├── main.jsx            # React root
│   └── index.css           # Tailwind directives & Barlow font setup
├── dist/                   # Production build bundle
├── Dockerfile              # Docker container definition
├── docker-compose.yml      # Multi-container orchestration
└── package.json
```
