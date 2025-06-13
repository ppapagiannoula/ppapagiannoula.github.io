// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

// Split text into characters
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

// Initialize animations
function initAnimations() {
    // Split text for animation
    document.querySelectorAll('.title[data-text]').forEach(splitText);

    // Create timeline for title animation
    const titleTimeline = gsap.timeline({
        defaults: {
            ease: "back.out(1.7)",
            duration: 0.5
        }
    });

    // Animate each character in the titles
    titleTimeline
        .from(".title span", {
            opacity: 0,
            y: 80,
            stagger: 0.05
        })
        .from(".button", {
            opacity: 0,
            y: 20,
            duration: 0.3
        }, "-=0.2");
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
});