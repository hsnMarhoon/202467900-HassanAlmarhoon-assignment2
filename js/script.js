// ============================================
// THEME TOGGLE FUNCTIONALITY
// ============================================

/**
 * Toggle between light and dark theme
 * Stores preference in localStorage
 */
const THEME_KEY = 'theme';

function getSavedTheme() {
    try {
        return localStorage.getItem(THEME_KEY);
    } catch (err) {
        alert('localStorage unavailable:', err);
        return null;
    }
}

function saveTheme(theme) {
    try {
        localStorage.setItem(THEME_KEY, theme);
    } catch (err) {
        alert('Could not save theme preference:', err);
    }
}

function applyTheme(theme) {
    const isDark = theme === 'dark';
    const button = document.getElementById('displaytheme');
    document.body.classList.toggle('dark-mode', isDark);
    button.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    button.setAttribute('aria-pressed', String(isDark));
}

function displaytheme() {
    const next = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(next);
    saveTheme(next);
}

function loadTheme() {
    const saved = getSavedTheme();
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (systemDark ? 'dark' : 'light'));
}

/**
 * Smooth scroll for navigation links
 */
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        }
        });
    });
}

/**
 * Handle contact form submission
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD_NAMES = { username: 'a username', email: 'your email address', message: 'a message' };

function setError(input, message) {
    const group = input.closest('.form-group');
    const msg = group.querySelector('.error-msg');

    if (message) {
        msg.dataset.error = message;          // CSS ::before reads this
        group.classList.add('has-error');
        input.setAttribute('aria-invalid', 'true');
    } else {
        delete msg.dataset.error;
        group.classList.remove('has-error');
        input.removeAttribute('aria-invalid');
    }
}

function validateField(input) {
    const value = input.value.trim();
    let message = '';

    if (!value) {
        message = `Please enter ${FIELD_NAMES[input.id]}.`;
    } else if (input.id === 'email' && !EMAIL_REGEX.test(value)) {
        message = 'That email looks incomplete. Use the format name@example.com.';
    } else if (input.id === 'message' && value.length < 10) {
        message = 'Your message is too short. Please write at least 10 characters.';
    }

    setError(input, message);
    return !message;
}

function setupContactForm() {
    const form = document.querySelector('.contact-container');
    if (!form) return;

    const fields = form.querySelectorAll('input, textarea');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        status.textContent = '';

        let firstInvalid = null;
        fields.forEach(field => {
            if (!validateField(field) && !firstInvalid) firstInvalid = field;
        });

        if (firstInvalid) {
            firstInvalid.focus();
            return;
        }

        const name = document.getElementById('username').value.trim();
        status.textContent = `Thank you, ${name}! Your message has been sent. I'll reply soon.`;
        form.reset();
    });

    // Once a field shows an error, re-check it as the user fixes it
    fields.forEach(field => {
        field.addEventListener('input', () => {
            if (field.closest('.form-group').classList.contains('has-error')) {
                validateField(field);
            }
        });
    });
}

/**
 * Initialize all features on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    setupSmoothScroll();
    setupContactForm();
    
    console.log('Portfolio initialized successfully!');
});