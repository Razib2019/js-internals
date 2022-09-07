//x++ VS ++x
// i++ VS ++i
console.log('first');
console.log('Second');
let seconds = 0;
const intervalId = setInterval(() => {
    console.log(++seconds);
    if (seconds === 10) {
        clearInterval(intervalId);
    }
}, 500);
console.log('Fourth');
console.log('fifth');