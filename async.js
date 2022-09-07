function doSomething() {
    console.log('Third');
}

console.log('first');
console.log('Second');
const timeoutId = setTimeout(() => {
    console.log('third');
}, 5000);
/* fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log('response received');
        return response.json();
    })
    .then(json => console.log(json)) */
console.log('Fourth');
console.log('Fifth');