document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealElements = () => {
        document.querySelectorAll('.fade-in, .slide-up, .hero-card, .menu-shell, .page-shell').forEach((element) => {
            element.classList.add('is-visible');
        });
    };

    const addHoverEffect = () => {
        document.querySelectorAll('.card-link, .btn, .enter-link, .back-link, button').forEach((element) => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-3px)';
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = '';
            });
        });
    };

    const addPageTransition = () => {
        document.querySelectorAll('a[href]').forEach((link) => {
            if (link.href.startsWith('mailto:') || link.href.startsWith('http')) {
                return;
            }

            link.addEventListener('click', (event) => {
                const target = link.getAttribute('href');
                if (!target || target.startsWith('#')) return;

                event.preventDefault();
                document.body.classList.add('is-transitioning');

                setTimeout(() => {
                    window.location.href = target;
                }, 220);
            });
        });
    };

    if (!prefersReducedMotion) {
        requestAnimationFrame(() => {
            revealElements();
            addHoverEffect();
            addPageTransition();
        });
    } else {
        document.querySelectorAll('.fade-in, .slide-up, .hero-card, .menu-shell, .page-shell').forEach((element) => {
            element.classList.add('is-visible');
        });
        addHoverEffect();
        addPageTransition();
    }
});
