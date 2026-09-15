const hiddenClasses = ['opacity-0', 'translate-y-10'];
const visibleClasses = ['opacity-100', 'translate-y-0'];

let observer = null;

 function getObserver () {
    if( observer !== null ) {
      return observer;
    };
    observer = new IntersectionObserver(handleIntersect,{
      threshold: 0.15,
    })
    return observer; 
 };

 function handleIntersect ( entries ) {
  entries.forEach(entry => {
    const elementIsVisible = entry.isIntersecting;
    if( !elementIsVisible ) return;
      animateIn(entry.target);
      getObserver().unobserve(entry.target);
  });
 };

 function animateIn (element) {
    element.classList.remove(...hiddenClasses );
    element.classList.add(...visibleClasses);
 };

export const vObserve = {
  mounted(element, binding) {
    if (binding.value === false) return;
    
    element.classList.add(
      'transition-opacity',
      'transition-transform',
      'duration-700',
      'ease-out',
      ...hiddenClasses
    );

    getObserver().observe(element);
  },

  unmounted(element) {
    getObserver().unobserve(element);
  },
};

