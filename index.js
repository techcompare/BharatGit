// BharatGit - Interactive Elements

document.addEventListener('DOMContentLoaded', () => {
    console.log('BharatGit initialized. Swag level: 100');

    // Smooth hover effect for cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Copy to clipboard logic
    const copyBtn = document.querySelector('button');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const text = 'npm i @bharatgit/cli -g';
            navigator.clipboard.writeText(text).then(() => {
                const originalText = copyBtn.innerText;
                copyBtn.innerText = 'Copied!';
                copyBtn.style.color = '#128807';
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                    copyBtn.style.color = '#FF9933';
                }, 2000);
            });
        });
    }

    // Dynamic Title Gradient on Scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroTitle = document.querySelector('h1');
        if (heroTitle) {
            heroTitle.style.backgroundPosition = `${scrolled * 0.5}px`;
        }
    });
});
