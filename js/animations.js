gsap.registerPlugin(ScrollToPlugin);

gsap.from('.nav-container', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

function pageTransition() {
    const tl = gsap.timeline();
    
    tl.to('.page-wrapper', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut'
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 0
                },
                ease: 'power2.inOut'
            });
        }
    });
}); 