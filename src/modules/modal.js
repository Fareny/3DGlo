const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const popupContent = document.querySelector('.popup-content');
    const mainForm = popupContent.querySelector(".main-form");

    let countOne = -100;
    let countTwo = -105;
    let countThree = 2000;
    let idInterval;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = `block`;
            popupContent.style.height = '335px';

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
        countThree -= 60;
        idInterval = requestAnimationFrame(animationMainForm);
        if (countThree > 0) {
            mainForm.style.left = '33px';
            mainForm.style.top = countThree + 'px';
        } else {
            cancelAnimationFrame(idInterval);
            countThree = 2000;
        }
    };

    const animationModal = () => {

        countTwo += 3;
        idInterval = requestAnimationFrame(animationModal);
        if (countTwo < 1) {
            modal.style.left = countTwo * 20 + 'px';
        } else {
            cancelAnimationFrame(idInterval);
            countTwo = -105;
        }
    };

    const animationModalContent = () => {
        countOne += 3.5;
        idInterval = requestAnimationFrame(animationModalContent);
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

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        });
    });
};

export default modal;