// Enhanced interactions for SnapClass
document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal for Feature Cards and Flow Steps
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal styles to elements
    const revealElements = document.querySelectorAll('.feature-card, .flow-step');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        revealObserver.observe(el);
    });

    // Handle CSS for revealed state
    const styleTag = document.createElement('style');
    styleTag.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleTag);

    console.log('SnapClass Premium Landing Page Active');
});

// Mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navToggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    const setOpen = (open) => {
        links.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
    };

    toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
});
