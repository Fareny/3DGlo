const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const imgScroll = document.querySelectorAll('img')[3];
    const popupContent = document.querySelector('.popup-content');
    const serviceBlock = document.getElementById("service-block");
    const mainForm = popupContent.querySelector(".main-form");

    let countOne = -100;
    let countTwo = -105;
    let countThree = 2000;
    let idInterval;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = `block`;
            popupContent.style.height = '360px';

            if (window.screen.width < 768) {
                console.log('Маленький экран');
            } else {
                animationModal();
                animationMainForm();
                animationModalContent();
            }
        });
    });

    const animationMainForm = () => {
        mainForm.style.position = 'fixed';
        countThree -= 16.5;
        idInterval = requestAnimationFrame(animationMainForm);
        if (countThree > 20) {
            mainForm.style.left = '33px';
            mainForm.style.top = countThree + 'px';
        } else {
            cancelAnimationFrame(idInterval);
            countThree = 2000;
        }
    };

    const animationModal = () => {

        countTwo++;
        idInterval = requestAnimationFrame(animationModal);  //фон
        if (countTwo < 1) {
            modal.style.left = countTwo * 20 + 'px';
        } else {
            cancelAnimationFrame(idInterval);
            countTwo = -105;
        }
    };

    const animationModalContent = () => {
        countOne++;
        idInterval = requestAnimationFrame(animationModalContent);  //Задник от от формы со строками
        if (countOne < 19) {
            popupContent.style.top = countOne * 5 + 'px';
        } else {
            cancelAnimationFrame(idInterval);
            countOne = -100;
        }
    };

    closeBtn.addEventListener('click', () => {
        modal.style.display = `none`;
    });

    let link = document.querySelector("body > main > a");
    link.removeAttribute("href");
    imgScroll.addEventListener('click', () => {
        serviceBlock.scrollIntoView({ block: "start", behavior: "smooth" });
    });

};

export default modal;