const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const imgScroll = document.querySelector("body > main > a > img");
    const modalContent = document.querySelector("body > div.popup > div");

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = `block`;
            modalContent.style.top = '-400px';
            animation();
        });
    });
    let active = false;
    let count = 0;
    let idInterval;
    const animation = () => {
        count++;
        idInterval = requestAnimationFrame(animation);
        if (count < 28) {
            modalContent.style.top = count * 4 + 'px';
        } else {
            cancelAnimationFrame(idInterval);
            count = 0;
        }
    };

    closeBtn.addEventListener('click', () => {
        modal.style.display = `none`;
    });

    let allLinks = document.querySelector("body > main > a");
    allLinks.removeAttribute("href");

    imgScroll.addEventListener('click', () => {
        console.log('click');
        window.scrollTo({ top: '830', behavior: 'smooth' });
    });

};

export default modal;