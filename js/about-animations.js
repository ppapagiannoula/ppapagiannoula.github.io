function initAboutAnimations() {
    const mainTimeline = gsap.timeline({
        defaults: {
            ease: "power3.out",
            duration: 0.8
        }
    });

    const aboutText = document.querySelector('.about span');
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
            ease: "back.out(1.7)"
        });
    }

    mainTimeline
        .from(".about .btn", {
            opacity: 0,
            scale: 0.8,
            duration: 0.5
        }, "-=0.3");

    const cvButton = document.querySelector('.about .btn');
    if (cvButton) {
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

document.addEventListener('DOMContentLoaded', () => {
    initAboutAnimations();
}); 