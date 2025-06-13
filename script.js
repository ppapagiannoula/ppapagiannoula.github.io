gsap.registerPlugin(TextPlugin);

function splitText(element) {
    const text = element.textContent;
    element.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.display = 'inline-block';
        element.appendChild(span);
    }
}

function initAnimations() {
    document.querySelectorAll('.title[data-text]').forEach(splitText);

    const titleTimeline = gsap.timeline({
        defaults: {
            ease: "back.out(1.7)",
            duration: 0.5
        }
    });

    titleTimeline
        .from(".container", {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
        .from(".title span", {
            opacity: 0,
            y: 80,
            stagger: 0.05,
            duration: 0.8
        })
        .from(".button", {
            opacity: 0,
            y: 20,
            duration: 0.5,
            onComplete: () => {
                gsap.to(".button", {
                    scale: 1.1,
                    duration: 0.3,
                    yoyo: true,
                    repeat: -1,
                    ease: "power1.inOut"
                });
            }
        }, "-=0.2");

    gsap.to(".container", {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    document.querySelectorAll('.title span').forEach(span => {
        span.addEventListener('mouseenter', () => {
            gsap.to(span, {
                scale: 1.2,
                color: "#8ace00",
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });

        span.addEventListener('mouseleave', () => {
            gsap.to(span, {
                scale: 1,
                color: "inherit",
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
});