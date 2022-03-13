const menu = () => {
    const menu = document.querySelector('menu');
    const mouseBtn = document.querySelector("body > main > a > img");
    const scroll = document.querySelector("body > main > a");

    document.addEventListener('click', (e) => {
        if ((e.target.closest('menu') && e.target.closest('a')) || e.target.closest('.menu')) {
            menu.classList.toggle('active-menu');
        }
    });

    menu.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            if (link.textContent != '×') {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            }
        });
    });
    mouseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(scroll.getAttribute('href')).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    });
};
export default menu;
