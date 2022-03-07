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




const animateCount = (totalValue, calcSquare, calcCount, calcDay, calcType, total) => {
    let time = 0.1;
    let step = 1;
    let count = -1;
    let setActive;
    let timeInterval = Math.round(time / (totalValue / step));

    let interval = setInterval(() =>{
        if(calcSquare != 0 && calcCount != 0 && calcDay != 0){
        count += step;
        setActive = true;

        if(setActive == true){
            calcSquare.disabled = true;
            calcCount.disabled = true;
            calcDay.disabled = true;
            calcType.disabled = true;
        }

        if(count == totalValue || totalValue == 0){
            clearInterval(interval);
            setActive = false;
            calcSquare.disabled = false;
            calcCount.disabled = false;
            calcDay.disabled = false;
            calcType.disabled = false;
        }

        total.textContent = count;
    }
    }, timeInterval);
};

export {anim, animateCount}; 