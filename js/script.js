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
function setupContactForm() {
    const form = document.querySelector('.contact-container');
    
    if (form) {
        form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!username || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Success message
        alert(`Thank you, ${username}! Your message has been sent successfully.`);
        
        // Reset form
        form.reset();
        });
    }
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