const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        // reject('Something went wrong')
    }, 4500)
});

console.log('Before');


promise.then((data) => {
    console.log('1', data);
}).then(() => {
    console.log('Does this run?');
}).catch((error) => {
    console.log('error:', error);
})
console.log('after');
