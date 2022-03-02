const val = () => {
    const email = document.querySelectorAll('input[type = email]');
    const phone = document.querySelectorAll('input[type = tel]');
    const text = document.getElementById('form2-message');
    const inputsText = document.querySelectorAll('input[type = text]');
    const calc = document.querySelectorAll('input.calc-item');
    const form3 = document.querySelector("#form3");
    const form2 = document.querySelector("#form2");
    const form1 = document.querySelector("#form1");



    calc.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "");
        });
    });

    function name(i) {
        inputsText[i].addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\sа-яА-Я-]+/i, "");
        });
    }
    name(0); name(4); name(5);

    text.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\sа-яА-Я-]+/i, "");
    });

    let regEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i; //проверка на почту
    email.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w@_\-.!~*']+/, "");
        });
    });

    phone.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d()-]+/, "");
        });
    });

    // let regEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i; //проверка на почту
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