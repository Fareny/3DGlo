const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('a');
    console.log(menu);


    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handleMenu);
    // closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach(menuItems => {
        menuItems.addEventListener('click', (e) => {
            if (e.target.closest('menu')) {
                handleMenu();
            }
        });
    });

};
export default menu;