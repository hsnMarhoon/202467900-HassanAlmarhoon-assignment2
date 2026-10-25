# Personal Portfolio Website – Assignment 2 (Interactive Features)

A responsive personal portfolio built with vanilla HTML, CSS and JavaScript. This version builds on Assignment 1 and adds interactivity: persistent theme preference, inline form validation with animated feedback, and a dynamic content feature.

**Repository:** https://github.com/hsnMarhoon/202467900-HassanAlmarhoon-assignment2
**Live demo (optional):** `[add GitHub Pages / Netlify link here, or delete this line]`

---

## What's New in Assignment 2

| Requirement | What I implemented |
|---|---|
| **Dynamic content** | `[DESCRIBE YOUR FEATURE, e.g. "live project search / tag filter that shows 'No projects found' when nothing matches"]` |
| **Data handling** | Theme preference saved in **localStorage**; falls back to the OS dark/light setting on the first visit; safe if storage is blocked |
| **Data handling** | Contact **form** with per-field validation and a confirmation message |
| **Animation / transitions** | Hover effects on buttons, cards, nav links and tags; theme colour transitions; error and success messages fade in |
| **Error handling / feedback** | Red inline error under each invalid field (no more `alert()`), focus moves to the first invalid field, fields re-validate as the user fixes them, green success message |
| **AI enhancement** | Claude used for code, debugging and documentation – see [AI usage](#ai-usage) |

## Features

- **Dark / light theme toggle** – remembered across visits, no flash of the wrong theme on load
- **Contact form validation** – required fields, email format, minimum message length, accessible error messages
- **Smooth-scrolling navigation** with sticky nav bar
- **Project cards** with hover lift, tech tags and responsive grid (1 column on mobile, 2 on tablet and up)
- **Responsive design** for phone, tablet and desktop

## Project Structure

```
id-name-assignment2/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── hotel_reservation.jpg
│       └── game-assets-reverse-engineering.jpg
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## How to Run Locally

No build step or installation is needed.

1. **Get the code**
   ```bash
   git clone https://github.com/hsnMarhoon/202467900-HassanAlmarhoon-assignment2
   cd 202467900-HassanAlmarhoon-assignment2
   ```
2. **Open it** using any one of these:
   - Double-click `index.html`, or
   - Use the *Live Server* extension in VS Code (right-click `index.html` → *Open with Live Server*), or
   - Run a local server: `python -m http.server 8000`, then visit http://localhost:8000
3. An internet connection is only needed for the Bootstrap 3.4.1 stylesheet loaded from a CDN. The site still works without it, with minor layout differences.

## How to Test the Features

- **Theme:** click the toggle, refresh the page, and the theme should persist. In DevTools → *Application → Local Storage*, the `theme` key changes between `dark` and `light`. Delete the key and refresh to see the OS preference used.
- **Form:** submit it empty to see three red messages; type `abc` as the email to see the format message; submit valid data to see the green confirmation.
- **Dynamic feature:** `[add one line describing how to try it]`

## Technologies

HTML5 · CSS3 (variables, Grid, Flexbox, keyframe animations) · JavaScript (ES6+, Web Storage API) · Bootstrap 3.4.1 (CDN, minimal use)

## AI Usage

I used **Claude (Anthropic)** during this assignment for: improving the theme persistence code (error-safe localStorage, system-preference fallback, no flash on load), building the inline form validation with CSS `::before` error messages, and reviewing my work against the assignment checklist and updating documentation. I reviewed and tested all AI-suggested code, and I can explain how it works. The complete log and declaration are in [`docs/ai-usage-report.md`](docs/ai-usage-report.md). The full conversations are in the AI Evidence ZIP submitted on Blackboard.

## Documentation

- [Technical Documentation](docs/technical-documentation.md) – architecture, functions, validation rules, accessibility
- [AI Usage Report](docs/ai-usage-report.md) – usage log and declaration

## Browser Support

Tested in: `[list the browsers you actually tested, e.g. Chrome, Firefox, phone-width view]`. Uses features supported in current versions of Chrome, Firefox, Safari and Edge (CSS variables, Grid, `localStorage`, `matchMedia`).

---

**Last updated:** October 2026 · **Version:** 2.0.0
