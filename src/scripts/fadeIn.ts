// Per-item IntersectionObserver — adds 'is-visible' with a small stagger
// between items that enter the viewport in the same frame
export function initFadeIn() {
    const items = document.querySelectorAll<HTMLElement>('.fade-item');
    const observer = new IntersectionObserver(
        (entries) => {
            // Group entries that are intersecting, stagger them
            const visible = entries.filter((e) => e.isIntersecting);
            visible.forEach((entry, i) => {
                const el = entry.target as HTMLElement;
                setTimeout(() => {
                    el.classList.add('is-visible');
                }, i * 80); // 80ms stagger between siblings entering together
                observer.unobserve(el);
            });
        },
        { threshold: 0.02 },
    );

    items.forEach((el) => observer.observe(el));
}
