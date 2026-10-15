/*
 * Код разбит на ES-модули в каталоге js/ (реконструкция структуры):
 *   js/config.js         — селекторы анимируемых карточек
 *   js/scroll-reveal.js  — плавное появление элементов при скролле
 *   js/main.js           — точка входа
 *
 * Точка входа подключается из HTML так: <script type="module" src="js/main.js"></script>
 * Этот файл сохранён только для обратной совместимости (автономная копия без модулей).
 */
document.addEventListener('DOMContentLoaded', () => {
    const revealSelectors = [
        '.about-card', '.resource-card', '.nav-card',
        '.team-card', '.wall-card', '.server-card',
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(revealSelectors.join(', ')).forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
