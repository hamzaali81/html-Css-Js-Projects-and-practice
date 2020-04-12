//How to perform Asynchronous js
// const second = () => {
//     // console.log('Hello world');
//     setTimeout(() => {
//         console.log('Async Hey Second');

//     }, 2000)
// }

// const first = () => {
//     console.log('Hey there 2')
//     second();
//     console.log('Hey there');
// }
// first();

//Asynchromous in old way
//Callback hell in js
function getReceipe() {
    setTimeout(() => {
        const receipeID = [101, 102, 103, 104]
        console.log(receipeID);

        setTimeout((id) => {
            const receipe = {
                title: 'fresh vegetables',
                publisher: 'hamza'
            };
            console.log(`${id}: ${receipe.title}`);


            setTimeout(publisher => {
                const receipe = {
                    title: 'Italian pizza',
                    publisher: 'hamza'
                }
                console.log(receipe);

            }, 1000, receipe.publisher)

        }, 1000, receipeID[2])


    }, 1500)
}
getReceipe();