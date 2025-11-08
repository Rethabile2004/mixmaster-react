# MixMaster - The Ultimate Cocktail Explorer

![MixMaster Banner](https://www.figma.com/community/file/1255860657910062828)  
*A modern Single Page Application (SPA) built with React, React Router v6, Styled Components, and powered by TheCocktailDB API.*

[Live Demo](https://your-mixmaster-app.netlify.app) | [Figma Design](https://www.figma.com/community/file/1255860657910062828)

---

## Features

- **Search cocktails** by name
- **View detailed cocktail recipes** with ingredients and instructions
- **Responsive navigation** with nested routing
- **Global loading states** and error handling
- **Newsletter subscription** with form submission (POST request)
- **React Query** for efficient data fetching and caching
- **Styled Components** for scoped, maintainable CSS-in-JS
- **Toast notifications** using React Toastify
- **404 Error Page** with custom SVG
- **SEO-friendly SPA** with Netlify `_redirects` support

---

## Tech Stack

- **React 18** + Vite
- **React Router DOM v6.11.2**
- **Styled Components**
- **Axios** for API calls
- **React Query (TanStack Query)**
- **React Toastify**
- **TheCocktailDB API**

---

## Project Structure


src/
├── assets/
│   └── wrappers/           # Styled component wrappers
├── components/
│   ├── Navbar.jsx
│   ├── SearchForm.jsx
│   ├── CocktailList.jsx
│   └── CocktailCard.jsx
├── pages/
│   ├── Landing.jsx
│   ├── Cocktail.jsx
│   ├── About.jsx
│   ├── Newsletter.jsx
│   ├── Error.jsx
│   ├── HomeLayout.jsx
│   └── SinglePageError.jsx
└── main.jsx
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/mixmaster.git
cd mixmaster
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

---

## API Reference

Powered by [TheCocktailDB](https://www.thecocktaildb.com/api.php)

- Search: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
- Details: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`

---

## Deployment

This app is ready for **Netlify**, **Vercel**, or **GitHub Pages**.

### Netlify `_redirects` (included in `/public`)

```txt
/*    /index.html   200
```

Enables client-side routing for React Router.

---

## Styling

- Fully responsive design using **CSS custom properties** and **clamp()**
- Mobile-first approach
- Smooth hover transitions
- Active link states with `NavLink`

Recommended VS Code extension:
> `styled-components.vscode-styled-components`

---

## Learn More

This project follows best practices from:

- [John Smilga's React Courses](https://www.udemy.com/user/johnsmilga/)
- [React Router Docs](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
- [TanStack Query](https://tanstack.com/query)

---

## License

MIT License © 2025 Your Name

---

**Built with passion, styled with love, mixed with code.**

---
```

### How to Use This README

1. Save it as `README.md` in your project root
2. Replace `your-username` and live demo link
3. Add a screenshot or banner image (optional but recommended)
4. Push to GitHub — instant beautiful repo!

Let me know if you want a **dark version**, **badges**, or **contribution guidelines** added!