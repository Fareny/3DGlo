const carMenu = document.querySelector('.carMenu');
const textId1 = document.getElementById('text1');
const textId2 = document.getElementById('text2');

const getData = (url) => fetch(url).then(response => response.json());

const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': "application/json; charset=UTF-8",
        }
    }).then(response => response.json());
};

const GetAndSend = () => {
    getData('car.json')
        .then(data => sendData("https://jsonplaceholder.typicode.com/posts", JSON.stringify(data)));
};

let data = getData('car.json').then(render => {
    cars(render);
}).catch(err => {
    console.error(err.message);
});

const cars = (data) => {
    carMenu.addEventListener('change', () => {
        if (carMenu.value == 'bmv') {
            textId1.textContent = 'Тачка ' + data.cars[0].brand + ' ' + data.cars[0].model;
            textId2.textContent = 'Цена: ' + data.cars[0].price + '$';
            GetAndSend();
        } else if (carMenu.value == 'volvo') {
            textId1.textContent = 'Тачка ' + data.cars[1].brand + ' ' + data.cars[1].model;
            textId2.textContent = 'Цена: ' + data.cars[1].price + '$';
            GetAndSend();
        } else {
            textId1.textContent = 'Выберите тачку!';
            textId2.textContent = '';
        }
    });
};

