# Ranjan Padmakiran — Developer Portfolio

A sleek, responsive, and performance-focused developer portfolio inspired by [Brittany Chiang's](https://brittanychiang.com/) iconic v5 design.

Built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- **Split Two-Column Layout**: Sticky desktop sidebar with responsive single-column layout on mobile/tablet.
- **Dynamic Cursor Spotlight**: Radial flashlight/torch effect tracking pointer coordinates.
- **Scroll-Spy Navigation**: Automatically highlights active sections (`ABOUT`, `EXPERIENCE`, `PROJECTS`) and animates indicator bar widths.
- **Sibling Card Dimming**: Hovering over an experience or project card elevates it while subtly dimming sibling cards.
- **Micro-Interactions**: Up-right sliding link arrow indicators (`↗`) on interactive elements.
- **Tailored Content**: Directly pre-configured with work experience, projects, live demos, and a downloadable PDF résumé.
- **Respectful Attribution**: Full credit provided to Brittany Chiang for the original design aesthetic.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
This generates the optimized static bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠 Customizing Content

All your data is cleanly separated from UI logic inside [`src/data/portfolioData.ts`](src/data/portfolioData.ts):
- **Personal Details**: Name, tagline, contacts, social links.
- **Experiences**: Role, company, dates, bullet achievements, and skill pills.
- **Projects**: Titles, descriptions, live demo links, GitHub links, and tech badges.
- **Résumé**: Update `public/resume.pdf` to refresh your PDF download.

---

## 🌐 Deployment

You can deploy this static site anywhere in seconds:

### Deploy to Vercel
1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework preset will automatically detect **Vite**; click **Deploy**.

### Deploy to Firebase Hosting
```bash
firebase init hosting
# Set public directory to "dist"
# Configure as a single-page app: Yes
firebase deploy
```

---

## ⚖️ Attribution & License
- Design inspired by [Brittany Chiang](https://brittanychiang.com/).
- Coded and customized by [Ranjan Padmakiran](https://github.com/RanjanKiran707).
- Licensed under the [MIT License](LICENSE).
