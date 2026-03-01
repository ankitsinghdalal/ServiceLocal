// FixKaro — Shared JavaScript

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
    var nav = document.querySelector('nav');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = '#1E293B';
        nav.style.padding = '1rem';
        nav.style.borderBottom = '1px solid rgba(255,255,255,0.07)';
        nav.style.gap = '0.75rem';
    }
});
