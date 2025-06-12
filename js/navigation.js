document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const targetUrl = this.getAttribute('href');
            
            e.preventDefault();
            
            document.body.classList.add('page-turn');
            
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
    
    document.body.classList.add('page-enter');
    
    setTimeout(() => {
        document.body.classList.remove('page-enter');
    }, 500);
}); 