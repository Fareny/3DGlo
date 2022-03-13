const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Менеджер свяжется с вами!';


    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json",
            }
        }).then(res => res.json());
    };

    const validate = (formItem) => {
        let name = formItem.user_name;
        let phone = formItem.user_phone;

        if (name.length < 3) {
            return false;
        } else if (phone.length != 11) {
            return false;
        } else {
            return true;
        }
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((value, key) => {
            formBody[key] = value;
        });

        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formBody)) {
            sendData(formBody).then(data => {
                statusBlock.textContent = successText;
                if (statusBlock.textContent == successText) {
                    setTimeout(() => (statusBlock.textContent = ''), 5000);
                }
                formElements.forEach((input) => {
                    input.value = '';
                });
            }).catch(error => {
                statusBlock.textContent = errorText;
            });
        } else {
            alert('Данные не валидны!!!');
            statusBlock.textContent = errorText;
            setTimeout(() => (statusBlock.textContent = ''), 5000);
        }
    };
    try {
        if (!form) {
            throw new Error('Верни форму -_-');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }

};

export default sendForm;