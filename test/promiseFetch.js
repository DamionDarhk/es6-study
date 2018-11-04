prom = new Promise((resolve, reject) => {
    resolve();
});
/*prom
.then(() => console.log('promise resolved'))
.catch(() => console.log('promise rejected'));*/

url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
    .then((response) => console.log(response.json()))
    .then((data) => console.log(data));