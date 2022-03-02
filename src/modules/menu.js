const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('a');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active-menu');
    });

    menuItems.forEach(menuItems => {
        menuItems.addEventListener('click', (e) => {
            if (e.target.closest('menu')) {
                menu.classList.toggle('active-menu');
            }
        });
    });

};
export default menu;