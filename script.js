//1
const getData = (url) => fetch(url).then(response => response.json());

const sendData = (url, data) => {
    return fetch(url, {
        method:'POST',
        body: data,
        headers: {
            'Content-type': "application/json; charset=UTF-8",
        }
    }).then(response => response.json());
};

const GetAndSend = () => {
    getData('db.json')
    .then(data => sendData("https://jsonplaceholder.typicode.com/posts", JSON.stringify(data)));
};

document.addEventListener('DOMContentLoaded', GetAndSend);

//2
const xmlHttpRequest = (url, data) => {
    let http = new XMLHttpRequest();
    http.open('POST', url);
    http.send([data]);
};
getData('db.json')
.then(data => xmlHttpRequest("https://jsonplaceholder.typicode.com/posts", JSON.stringify(data)));



