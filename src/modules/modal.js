const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const imgScroll = document.querySelector("body > main > a > img");
    const modalContent = document.querySelector("body > div.popup > div");
    const form = document.querySelector("#form3");
    const mainForm = document.querySelector("body > div.popup > div > div");
    console.log(mainForm);

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = `block`;
            modal.style.left = '0px';
            modalContent.style.top = '0px';
            form.style.top = '300px';
            // mainForm.style.transform = 'translateY(150%)';

            animationModal();
            animationModalContent();
            animationMainForm();
        });
    });

    let countOne = -100;
    let countTwo = -100;
    let countThree = 0;
    let idInterval;

    const animationMainForm = () => {
        mainForm.style.transform = 'translateY(150%)';
        countThree++;
        idInterval = requestAnimationFrame(animationMainForm);
        // if (countThree < 100) {
        //     mainForm.style.left = countThree * 2 + 'px';
        // } else {
        //     cancelAnimationFrame(idInterval);
        //     countThree = 0;
        // }
    };

    const animationModal = () => {
        countTwo++;
        idInterval = requestAnimationFrame(animationModal);
        if (countTwo < 1) {
            modal.style.left = countTwo * 20 + 'px';
        } else {
            cancelAnimationFrame(idInterval);
            countTwo = -100;
        }
    };

    const animationModalContent = () => {
        countOne++;
        idInterval = requestAnimationFrame(animationModalContent);
        if (countOne < 40) {
            modalContent.style.top = countOne * 4 + 'px';
        } else {
            cancelAnimationFrame(idInterval);
            countOne = -100;
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