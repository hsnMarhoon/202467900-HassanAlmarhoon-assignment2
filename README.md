# Personal Portfolio Website 🚀

> A professional, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Created as Assignment 1 for Foundation & AI Integration course.

**Live Demo:** [View Portfolio](https://github.com/hsnMarhoon/202467900-HassanAlmarhoon-assignment1)

---

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [How to Run Locally](#how-to-run-locally)
- [Deployment](#deployment)
- [AI Integration](#ai-integration)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### **Core Features**

**Responsive Design**
- Mobile-first approach
- Works on all devices
- Touch-friendly interface

**Dark/Light Theme Toggle**
- Click button to switch themes
- Theme persists across sessions
- Smooth transitions

**Professional Sections**
- About Me with personal introduction
- showcasing Projects worked for 
- Contact form with validation

**Interactive Elements**
- Smooth scrolling navigation
- Hover effects on cards
- Form validation with feedback

**Accessibility**
- Semantic HTML structure
- Proper color contrast (WCAG)

**Modern Styling**
- CSS Grid & Flexbox layouts
- CSS variables for theming
- Gradient accents and effects

---

## Quick Start

### **Prerequisites**

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, etc.)
- Git (optional, for version control)

### **Installation**

1. **Clone or Download**
   ```bash
   # Clone from GitHub
   git clone https://github.com/hsnMarhoon/202467900-HassanAlmarhoon-assignment1
   cd id-name-assignment1
   
   # Or download ZIP and extract
   ```

2. **Open in Browser**
   ```bash
   # Simple way - double click index.html
   # Or use Live Server in VS Code
   
   # Or run local server
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

3. **Done!** Portfolio is now running locally

---

## Project Structure

```
portfolio/
├── index.html                         # Main HTML file
├── README.md                          # This file
│
├── docs/                              # Documentation folder
│   ├── ai-usage-report.md            # AI tool usage report
│   └── technical-documentation.md    # Technical details
│
├── css/
│   └── styles.css                    # All styling (responsive, dark mode)
│
├── js/
│   └── script.js                     # Theme toggle, form validation
│
└── assets/
    └── images/
        ├── hotel_reservation.jpg           # Project 1 image
        └── game-assets-reverse-engineering.jpg  # Project 2 image
```

### **Key Files Explained**

| File | Purpose |
|------|---------|
| `index.html` | Structure - Navigation, sections, form |
| `styles.css` | Styling - Responsive, dark mode, animations |
| `script.js` | Functionality - Theme toggle, form validation |
| `docs/ai-usage-report.md` | AI integration documentation |
| `docs/technical-documentation.md` | Technical specifications |

---

## Technologies Used

### **Frontend**

- **HTML** - Semantic markup
- **CSS** - Responsive layouts, CSS variables, animations
- **JavaScript** - Interactive features
- **Bootstrap** - Grid system (minimal usage)

### **Tools**

- **Git** - Version control
- **GitHub** - Repository hosting
- **VS Code** - Code editor

### **Deployment**

- **GitHub Pages** - Free hosting
- **Netlify** - Alternative hosting

---

## How to Run Locally

### **Option 1: Direct File (Easiest)**

1. Download/Clone the repository
2. Navigate to the folder
3. Double-click `index.html`
4. Portfolio opens in your default browser

### **Option 2: Live Server (VS Code)**

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Browser opens with auto-refresh on file changes

---

## AI Integration

### **AI Tools Used**

This portfolio was developed using **Claude (Anthropic)** for:
- Code generation and structure
- CSS styling and responsive design
- JavaScript functionality
- Documentation and content refinement

### **How AI Was Used**

**Code Generation** - HTML/CSS/JS boilerplate  
**Design Assistance** - Typography, spacing, layouts  
**Problem Solving** - Debugging and optimization  
**Documentation** - Professional writing and structure  

### **Learning Approach**

- AI generated suggestions, I reviewed and customized
- All code was tested and verified
- Modifications reflect personal understanding
- Transparency about AI usage (see `docs/ai-usage-report.md`)

For detailed AI integration report, see: [`docs/ai-usage-report.md`](docs/ai-usage-report.md)

---

## Customization

### **Change Theme Colors**

Edit `css/styles.css` (line ~10):

```css
:root {
  --primary-color: #667eea;      /* Change this */
  --secondary-color: #764ba2;    /* Change this */
  --text-dark: #2c3e50;          /* Change this */
}
```

---

## Features Checklist

- [x] Responsive design (mobile, tablet, desktop)
- [x] About Me section
- [x] Projects showcase (2+ projects)
- [x] Contact form with validation
- [x] Dark/Light theme toggle
- [x] Smooth scrolling navigation
- [x] Professional styling
- [x] Semantic HTML
- [x] CSS variables for theming
- [x] localStorage persistence
- [x] Form validation
- [x] Accessibility features
- [x] AI integration documented
- [x] Technical documentation
- [x] README with setup instructions

---

## Documentation

For more detailed information:

- **[Technical Documentation](docs/technical-documentation.md)** - Architecture, components, styling system
- **[AI Usage Report](docs/ai-usage-report.md)** - How AI tools were used responsibly
- **[Commit History](https://github.com/hsnMarhoon/202467900-HassanAlmarhoon-assignment1)** - Development progress

---

### **Optimizations**

Mobile-first CSS  
Minimal JavaScript  
Compressed images  
CSS variables reduce duplication  
No external dependencies (except Bootstrap)  

---

## Security

No sensitive data stored  
Client-side form validation only  
No external API calls  
No authentication needed  
Safe for public deployment  

**Note:** Form submission is client-side only. For actual email sending, backend integration needed.

---

**Last Updated:** September 2026  
**Version:** 1.0.0  
**Status:** Production Ready
