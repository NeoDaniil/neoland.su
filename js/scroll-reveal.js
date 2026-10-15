import { REVEAL_SELECTORS } from './config.js';

/**
 * Плавное появление элементов при скролле.
 * Элементы изначально скрыты (opacity 0, сдвиг вниз),
 * а при попадании в область видимости плавно проявляются.
 */
export function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const selector = REVEAL_SELECTORS.join(', ');
    document.querySelectorAll(selector).forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}
