
export const vObserve = {
    mounted(el) {
        el.classList.add(
        'transition-all',
        'duration-1000',
        'ease-out',
        'opacity-0',
        'translate-y-10'
        );

    const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-10');
          el.classList.add('opacity-100', 'translate-y-0');
          
          observer.unobserve(el);
        }
    },
    { threshold: 0.15 }
);
observer.observe(el);
    },
};

