function initSocialAnimations() {
    const mailAnimation = lottie.loadAnimation({
        container: document.getElementById('mail-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'imgs/animations/mail.json'
    });

    const githubAnimation = lottie.loadAnimation({
        container: document.getElementById('github-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'imgs/animations/github.json'
    });

    const linkedinAnimation = lottie.loadAnimation({
        container: document.getElementById('linkedin-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'imgs/animations/linkedin.json'
    });

    const mailContainer = document.getElementById('mail-animation');
    const githubContainer = document.getElementById('github-animation');
    const linkedinContainer = document.getElementById('linkedin-animation');

    mailContainer.addEventListener('mouseenter', () => {
        mailAnimation.goToAndPlay(0);
    });

    githubContainer.addEventListener('mouseenter', () => {
        githubAnimation.goToAndPlay(0);
    });

    linkedinContainer.addEventListener('mouseenter', () => {
        linkedinAnimation.goToAndPlay(0);
    });
}

document.addEventListener('DOMContentLoaded', initSocialAnimations); 