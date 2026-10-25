# Technical Documentation – Personal Portfolio (Assignment 2)

**Version:** 2.0.0 · **Last updated:** October 2026

## 1. Overview

A static, single-page portfolio (About, Projects, Contact) built with vanilla HTML, CSS and JavaScript. Assignment 2 adds interactivity: a persistent theme, validated contact form with animated feedback, and a dynamic content feature.

## 2. Technology Stack

| Layer | Technology | Notes |
|---|---|---|
| Markup | HTML5 | Semantic sections, labelled form fields |
| Styling | CSS3 | Variables, Grid, Flexbox, keyframes, media queries |
| Scripting | JavaScript (ES6+) | No frameworks; Web Storage API, `matchMedia` |
| Library | Bootstrap 3.4.1 (CDN) | Minimal use; the custom stylesheet is loaded after it |

## 3. File Structure

```
index.html            Page structure and form markup
css/styles.css        All styles, including dark mode and validation styles
js/script.js          Theme, smooth scroll, form validation, [dynamic feature]
assets/images/        Project images
docs/                 This file and the AI usage report
```

## 4. Features

### 4.1 Theme toggle with localStorage (Data Handling)

| Function | Responsibility |
|---|---|
| `getSavedTheme()` | Reads the `theme` key inside `try/catch`; returns `null` if storage is unavailable |
| `saveTheme(theme)` | Writes `'dark'` or `'light'` inside `try/catch`; fails silently with a console warning |
| `applyTheme(theme)` | Toggles `dark-mode` on `<body>`, updates the button text and `aria-pressed` |
| `displaytheme()` | Click handler: switches to the opposite theme, applies it and saves it |
| `loadTheme()` | On load: uses the saved theme, else the OS `prefers-color-scheme`, else light |

**Flash prevention:** a short inline `<script>` right after `<body>` adds `dark-mode` before the page is painted, so dark-mode users never see a flash of the light theme.

**Edge cases handled:** blocked or private-mode storage (no crash, the theme just doesn't persist); no saved value (OS preference is used).

**Storage:** key `theme`, values `dark` | `light`.

### 4.2 Contact form validation (Error handling and user feedback)

The form has `novalidate`, so JavaScript, not the browser, shows the errors.

| Field | Rules | Error message |
|---|---|---|
| Username | Required (after trimming) | "Please enter a username." |
| Email | Required; matches `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | "Please enter your email address." / "That email looks incomplete. Use the format name@example.com." |
| Message | Required; at least 10 characters | "Please enter a message." / "Your message is too short. Please write at least 10 characters." |

**How errors are displayed:** `::before` cannot be applied to `<input>` or `<textarea>`, so every field has an empty `<span class="error-msg">` after it. `setError(input, message)` sets `data-error` on that span, adds `has-error` to the field's `.form-group` (red border) and sets `aria-invalid="true"`. CSS draws the text:

```css
.error-msg[data-error]::before { content: "⚠ " attr(data-error); color: #e53935; }
```

**Flow:**
1. On submit, `validateField()` runs for every field.
2. If any fail, errors appear and focus moves to the first invalid field.
3. After an error appears, the field is re-validated on every `input` event, so the message disappears as soon as it's fixed.
4. If all pass, a green confirmation is written to `#form-status` with `textContent` (not `innerHTML`, which prevents HTML injection) and the form resets.

**Accessibility:** each input has `aria-describedby` pointing to its error span; error spans use `aria-live="polite"`; `#form-status` has `role="status"`; labels are linked with matching `for`/`id` values.

### 4.3 Dynamic content

`[Describe your feature: what the user does, what changes on the page, which function(s) implement it, and the empty-state message if any.]`

### 4.4 Animations and transitions

| Element | Effect |
|---|---|
| Buttons, nav links | Colour, lift (`translateY`) and shadow transitions on hover |
| Project cards | Lift and shadow on hover |
| Tech tags | Colour change on hover |
| Page colours | 0.3s transition when switching theme |
| Error / success messages | `errorIn` keyframe: 0.3s fade and slide |

All effects are short (0.2–0.3s) and use `transform`/`opacity` where possible.

### 4.5 Smooth scrolling

`setupSmoothScroll()` intercepts nav link clicks and calls `scrollIntoView({ behavior: 'smooth' })`.

## 5. Styling System

- **CSS variables** (`--primary-color`, `--text-dark`, `--bg-light`, `--white`…) are defined in `:root` and overridden under `body.dark-mode`, so dark mode mostly needs no duplicated rules.
- **Responsive:** the project grid is one column by default and two columns at 768px and up. Extra tweaks at ≤768px and ≤480px (stacked nav, smaller headings, 16px inputs to stop iOS zoom).
- **Validation styles:** `.error-msg`, `.has-error`, `.form-status`, with separate lighter red values for dark mode.

## 6. Initialisation

```js
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    setupSmoothScroll();
    setupContactForm();
    // [init for your dynamic feature]
});
```

## 7. Testing

| Test | Expected result |
|---|---|
| Toggle theme, refresh | Theme persists; no flash on load |
| Delete `theme` key, refresh | Page follows the OS theme |
| Submit empty form | Three red messages, focus on Username |
| Email `abc` | Format error; clears when corrected |
| Message under 10 characters | Length error |
| Valid submission | Green confirmation, form resets |
| Dark mode errors | Messages stay readable |
| Phone-width view | Layout stacks, nothing overflows |
| `[Dynamic feature test]` | `[Expected result]` |

`[Add the browsers/devices you actually tested and the date.]`

## 8. Known Limitations

- The form is client-side only and does not send email. A backend or a service such as Formspree would be needed.
- `::before` error text can't be selected, and screen readers announce it inconsistently, so `aria-*` attributes are used as backup.
- Bootstrap 3.4.1 is old and only lightly used, so replacing it would reduce page weight.

## 9. Troubleshooting

| Problem | Fix |
|---|---|
| Theme doesn't persist | Storage may be blocked (private mode or browser setting) |
| Browser popups appear instead of red messages | Check that `novalidate` is on the `<form>` |
| Errors don't show | Confirm each field has its `.error-msg` span and an id of `username`, `email` or `message` |
| Images missing | Check paths under `assets/images/` |

## 10. Deployment

Static site: push to GitHub and enable *Settings → Pages → Deploy from branch (main, /root)*, or drag the folder to Netlify. No build step or environment variables.
