document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.portfolio-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetUrl = this.href;

            document.querySelector('.page-content').classList.add('fade-out');

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Match this with the duration of the CSS transition
        });
    });
});