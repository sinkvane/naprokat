const anchorLinks = document.querySelectorAll('a[data-anchor]');

anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        if (window.location.pathname != '/index.html') {
            window.location.pathname = '/index.html';
        } else {
            const targetId = this.getAttribute('data-anchor');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').clientHeight + 70;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});