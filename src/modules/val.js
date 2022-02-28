const val = () => {
    const calcItemCalcSquare = document.querySelector('.calc-square');
    const calcItemCalcDay = document.querySelector(".calc-day");
    const calcItemCalcCount = document.querySelector(".calc-count");

    const form3 = document.querySelector("#form3");
    const form2 = document.querySelector("#form2");
    const form1 = document.querySelector("#form1");

    calcItemCalcSquare.type = "number";
    calcItemCalcDay.type = "number";
    calcItemCalcCount.type = "number";

    function replacerOne(input) {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/d+/, ""); //Калькулятор стоимости
        });
    }
    replacerOne(calcItemCalcSquare);
    replacerOne(calcItemCalcDay);
    replacerOne(calcItemCalcCount);

    function replacerTwo(input) {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\-,.\s+]/g, '');
        });
    }
    replacerTwo(form2[3]);//Ваше сообщение во 2 форме
    replacerTwo(form1[0]);
    replacerTwo(form2[0]);//Имя
    replacerTwo(form3[0]);

    function email(input) {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z\d+_@!~*'.-\s+]/g, ''); //символы для почты
        });
    }
    email(form2[1]);
    email(form1[1]); //почта
    email(form3[2]);

    function number(input) {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9()-]/, ''); //символы для номера тел.
        });
    }
    number(form2[2]);
    number(form1[2]);
    number(form3[1]);

    let regEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i; //проверка на почту
    let regTelNumber = /^\d[\d\(\)\ -]{4,14}\d$/; //проверка на номер телефона
    function check(button, name, email, phone) {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            if (name.value == '') { //проверка на имя
                alert('Введите ваше имя!');
            }

            if (!regEmail.test(email.value)) { //regEmail
                alert('Некорректно введена почта!');
            } else {
                console.log('yes');
            }

            if (!regTelNumber.test(phone.value)) { //form2Phone
                alert('Некорректно введён номер телефона!');
            } else {
                console.log('yes');
            }

        });
    }
    //     button,    name,    email,   phoneNumber
    check(form1[3], form1[0], form1[1], form1[2]);
    check(form2[4], form2[0], form2[1], form2[2]);
    check(form3[3], form3[0], form3[2], form3[1]);

};
export default val;