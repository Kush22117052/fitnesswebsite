// home.js

document.addEventListener('DOMContentLoaded', () => {
    const supportLink = document.querySelector('a[href="support.html"]');
    const supportTab = document.querySelector('.support');
    const closeBtn = document.querySelector('.support .close-btn');

    if (supportLink && supportTab && closeBtn) {
        supportLink.addEventListener('click', (e) => {
            e.preventDefault();
            supportTab.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            supportTab.classList.remove('active');
        });
    }

    // Burger menu functionality
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }
});
