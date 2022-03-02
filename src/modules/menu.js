const menu = () => {
    const menu = document.querySelector('menu');

    document.addEventListener('click', (e) => {
        if ((e.target.closest('menu') && e.target.closest('a')) || e.target.closest('.menu')) {
            menu.classList.toggle('active-menu');
        }
    });

};
export default menu;