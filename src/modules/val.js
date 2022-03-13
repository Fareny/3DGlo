const val = () => {
    const email = document.querySelectorAll('input[type = email]');
    const phone = document.querySelectorAll('input[type = tel]');
    const text = document.getElementById('form2-message');
    const inputsText = document.querySelectorAll('input[type = text]');
    const calc = document.querySelectorAll('input.calc-item');

    document.querySelector("#form1-email").required = true;
    document.querySelector("#form2-email").required = true;
    document.querySelector("#form3-email").required = true;

    calc.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "");
        });
    });

    function name(i) {
        inputsText[i].addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\sа-яА-Я]+/i, "");
        });
    }
    name(0); name(4); name(5);

    text.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\sа-яА-Я-"',.?!\d+]+/i, "");
    });

    email.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w@_\-.!~*']+/, "");
        });
    });

    phone.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d()+-]+/, "");
        });
    });
};


export default val;