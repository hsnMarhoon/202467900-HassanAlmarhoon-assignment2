# AI Usage Report – Assignment 2 (Interactive Features)

**Name:** Hassan Almarhoon
**Student ID:** 202467900
**Date:** 25 October 2026
**Repository:** `202467900-HassanAlmarhoon-assignment2`

---

## 1. AI Tools Used

| Tool | How I used it |
|---|---|
| **Claude (Anthropic)** | Reviewing and improving my theme-persistence code, writing the inline form-validation feature, checking my project against the assignment requirements, and drafting/updating documentation |

No other AI tools were used.

## 2. Usage Log

| ID | Tool (model) | Date | Purpose | Files affected | What you changed and how you verified it |
|----|--------------|------|---------|----------------|------------------------------------------|
| C01 | Claude (`[model name shown in your chat]`) | 2026-10-25 | Add localStorage theme persistence: try/catch around storage, OS-preference fallback, `aria-pressed`, inline script to prevent the flash of the wrong theme | `js/script.js`, `index.html` | `[What you changed. Verified by: toggling, refreshing, checking Local Storage in DevTools, deleting the key and checking the OS fallback]` |
| C02 | Claude (`[model name]`) | 2026-10-25 | Review my files against the assignment checklist; identify missing items and form bugs (email `type`, mismatched label `for`) | none (advice only) | `[What you did with the advice]` |
| C03 | Claude (`[model name]`) | 2026-10-25 | Replace `alert()` with inline form errors drawn with `::before`, plus `aria-*` attributes, animated messages and a success message | `index.html`, `css/styles.css`, `js/script.js` | `[What you changed. Verified by: submitting empty form, invalid email, short message, valid form; checking dark mode]` |
| C04 | Claude (`[model name]`) | 2026-10-25 | Update README and both docs files for Assignment 2 | `README.md`, `docs/*.md` | `[What you edited and verified, e.g. filled the placeholders, checked each claim against my code]` |

> Add a row for any other AI conversation or generated artifact, including any used for the dynamic content feature. IDs run C01, C02… for conversations and A01, A02… for artifacts.

## 3. What AI Contributed and What I Did

**Theme persistence (localStorage).** Claude suggested wrapping storage access in `try/catch` because it can throw in private browsing or when storage is blocked, reading `prefers-color-scheme` on a first visit, and placing a tiny inline script right after `<body>` so the saved theme is applied before the page paints. I `[describe your own changes/testing]`.

**Form validation.** Claude pointed out that `::before` cannot be used on `<input>` or `<textarea>`, so each field gets an empty `<span class="error-msg">`; JavaScript sets a `data-error` attribute and CSS draws the red text with `content: attr(data-error)`. I `[describe your own changes/testing]`.

**Dynamic content.** `[State whether AI was used for this feature. If not: "No AI was used for the dynamic content feature."]`

**Documentation.** Claude drafted the structure of the README and technical documentation. I `[describe what you rewrote or corrected]`.

## 4. Understanding Check

I can explain:
- Why `localStorage` access is wrapped in `try/catch`, and why the inline script runs before the page renders (to avoid a flash of the light theme).
- How `matchMedia('(prefers-color-scheme: dark)')` provides a default when no preference is saved.
- Why `novalidate` is on the form (so my JavaScript handles errors instead of the browser's popups) and why the error text uses `textContent`/`data-*` rather than `innerHTML` (to avoid injecting HTML).
- How `setError()` toggles the `data-error` attribute, the `has-error` class and `aria-invalid`, and how `validateField()` decides which message to show.

## 5. Benefits and Limitations

**Benefits:** faster discovery of edge cases (blocked storage, flash of wrong theme), better accessibility attributes, a clear checklist of missing requirements.

**Limitations:** the AI did not know which features were in my repo until I shared files, so I had to check its suggestions against my actual code. `::before` text is not selectable and screen readers announce it inconsistently, so I added `aria-invalid` and `aria-describedby` to compensate.

## 6. Declaration

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Name:** Hassan Almarhoon
**ID:** 202467900
**Date:** 25 October 2026
