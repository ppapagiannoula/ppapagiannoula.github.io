gsap.registerPlugin(ScrollTrigger, TextPlugin);

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
    const homeSection = document.querySelector('#home');
    if (homeSection) {
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
                duration: 0.5
            }, "-=0.2");

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

    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const aboutText = aboutSection.querySelector('.about span');
        if (aboutText) {
            const text = aboutText.textContent;
            aboutText.textContent = '';
            
            const words = text.split(/(\s+)/);
            words.forEach((word) => {
                if (word.trim() === '') {
                    aboutText.appendChild(document.createTextNode(word));
                } else {
                    const wordSpan = document.createElement('span');
                    wordSpan.className = 'word';
                    
                    for (let i = 0; i < word.length; i++) {
                        const charSpan = document.createElement('span');
                        charSpan.className = 'char';
                        charSpan.textContent = word[i];
                        charSpan.style.display = 'inline-block';
                        wordSpan.appendChild(charSpan);
                    }
                    
                    aboutText.appendChild(wordSpan);
                }
            });

            gsap.from(aboutText.querySelectorAll('.char'), {
                opacity: 0,
                y: 20,
                stagger: 0.02,
                duration: 0.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: aboutSection,
                    start: "top center",
                    toggleActions: "play none none reverse"
                }
            });
        }

        const cvButton = aboutSection.querySelector('.btn');
        if (cvButton) {
            gsap.from(cvButton, {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                scrollTrigger: {
                    trigger: aboutSection,
                    start: "top center",
                    toggleActions: "play none none reverse"
                }
            });

            cvButton.addEventListener('mouseenter', () => {
                gsap.to(cvButton, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            });

            cvButton.addEventListener('mouseleave', () => {
                gsap.to(cvButton, {
                    scale: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            });
        }
    }

    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        gsap.from(contactSection.querySelector('h2'), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: contactSection,
                start: "top center",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(contactSection.querySelectorAll('.contact-link'), {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 0.5,
            scrollTrigger: {
                trigger: contactSection,
                start: "top center",
                toggleActions: "play none none reverse"
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
}); 