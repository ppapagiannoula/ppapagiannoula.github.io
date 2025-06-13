class Navigation {
  constructor() {
    this.nav = document.querySelector('.nav-container');
    this.themeToggle = document.querySelector('.theme-toggle');
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    this.init();
  }

  init() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      this.nav.classList.add('dark-mode');
    }

    this.initAnimations();

    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }

  initAnimations() {
    gsap.from('.nav-links a', {
      duration: 0.8,
      y: -20,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.nav-logo', {
      duration: 0.8,
      x: -20,
      opacity: 0,
      ease: 'power3.out'
    });

    gsap.from('.theme-toggle', {
      duration: 0.8,
      x: 20,
      opacity: 0,
      ease: 'power3.out'
    });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode);

    document.body.classList.toggle('dark-mode');
    this.nav.classList.toggle('dark-mode');

    gsap.to([document.body, this.nav], {
      duration: 0.5,
      backgroundColor: this.isDarkMode ? '#121212' : '#ffffff',
      color: this.isDarkMode ? '#ffffff' : '#000000',
      ease: 'power2.inOut'
    });

    gsap.to(this.themeToggle, {
      duration: 0.3,
      scale: 1.2,
      yoyo: true,
      repeat: 1
    });

    const svg = this.themeToggle.querySelector('svg');
    if (this.isDarkMode) {
      svg.innerHTML = `
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
      `;
    } else {
      svg.innerHTML = `
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      `;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
}); 