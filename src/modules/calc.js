const calc = (price = 100) => {
const calcBlock = document.querySelector('.calc-block');
const calcType = document.querySelector('.calc-type');
const calcSquare = document.querySelector('.calc-square');
const calcCount = document.querySelector('.calc-count');
const calcDay = document.querySelector('.calc-day');
const total = document.getElementById('total');

const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if(calcCount.value > 1){
        calcCountValue += calcCount.value / 10;
    }
    
    if(calcDay.value && calcDay.value < 5){
        calcDayValue = 2;
    } else if(calcDay.value && calcDay.value < 10) {
        calcDayValue = 1.5;
    }

    if(calcType.value && calcSquare.value){
       totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
        totalValue = 0;
    }
    
const animateCount = () => {
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
    animateCount();
    
};

calcBlock.addEventListener('change', (e) => {
    if(e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay){
        countCalc();
    }
});

};
export default calc;