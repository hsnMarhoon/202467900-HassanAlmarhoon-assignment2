// ============================================
// THEME TOGGLE FUNCTIONALITY
// ============================================

/**
 * Toggle between light and dark theme
 * Stores preference in localStorage
 */
function displaytheme() {
    const body = document.body;
    const button = document.getElementById('displaytheme');
    
    // Toggle dark-mode class
    body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        button.textContent = 'Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        button.textContent = 'Dark Mode';
    }
}

/**
 * Load saved theme preference on page load
 */
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const button = document.getElementById('displaytheme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        button.textContent = 'Light Mode';
    } else {
        button.textContent = 'Dark Mode';
    }
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