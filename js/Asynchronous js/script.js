//How to perform Asynchronous js
const second = () => {
    // console.log('Hello world');
    setTimeout(() => {
        console.log('Async Hey Second')
    }, 2000)
}

const first = () => {
    console.log('Hey there 2')
    second();
    console.log('Hey there');
}
first();