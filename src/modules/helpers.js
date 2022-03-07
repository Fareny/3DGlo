const anim = (modal, buttons, popupContent, mainForm) => {
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
};

const animateCount = (total, totalValue) => {
    let count = 0;
    let totalTick = Math.round(totalValue / 60);

    const animationNumber = () => {
    let interval = requestAnimationFrame(animationNumber);
        count += totalTick;
        if(count >= totalValue){
            cancelAnimationFrame(interval);
            total.textContent = totalValue;
        } else {
        total.textContent = count; 
        }
    };
    animationNumber();
};

export {anim, animateCount}; 