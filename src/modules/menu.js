const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    console.log(menu);

    // menu.addEventListener('click', (e) => {
    //     if (e.target.closest('.active-menu') || e.target.classList.contains('close-btn')) {
    //         handleMenu();
    //     } else if (e.target.matches('ul>li>a')) {
    //         handleMenu();
    //     } else {
    //         if (e.target.closest('.menu')) {
    //             handleMenu();
    //         }
    //     }
    // });


    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach(menuItems => { menuItems.addEventListener('click', handleMenu); });

};
export default menu;