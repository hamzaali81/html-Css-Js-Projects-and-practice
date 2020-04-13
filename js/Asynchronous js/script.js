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

// Asynchromous in old way
// Callback hell in js
// function getReceipe() {
//     setTimeout(() => {
//         const receipeID = [101, 102, 103, 104]
//         console.log(receipeID);

//         setTimeout((id) => {
//             const receipe = {
//                 title: 'fresh vegetables',
//                 publisher: 'hamza'
//             };
//             console.log(`${id}: ${receipe.title}`);


//             setTimeout(publisher => {
//                 const receipe = {
//                     title: 'Italian pizza',
//                     publisher: 'hamza'
//                 }
//                 console.log(receipe);

//             }, 1000, receipe.publisher)

//         }, 1000, receipeID[2])


//     }, 1500)
// }
// getReceipe();

//Promise produce
// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // reject([101, 102, 103, 104])
//         resolve([101, 102, 103, 104])
//     }, 1500)
// })

// const getReceipe = recID => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             const receipe = {
//                 title: 'chips',
//                 author: 'hamza'

//             }
//             resolve(`${ID}: ${receipe.title}`);

//         }, 1500, recID);
//     });
// };

// const getRelated = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout(pub => {
//             const receipe = {
//                 title: 'burger',
//                 publisher: 'ahmed'
//             }
//             resolve(`${pub} : ${receipe.title}`)
//         }, 1500, publisher)
//     })
// }
// getIDs
//     .then(IDs => {
//         console.log(IDs);
//         return getReceipe(IDs[2]);
//         // return getRelated(IDs[3]);
//     })
//     .then(receipe => {
//         console.log(receipe);
//         // return getRelated(receipe.publisher);
//         return getRelated('hamza');
//     })
//     .then(receipe => {
//         console.log(receipe);
//     })
//     .catch(error => {
//         // console.log(error);
//         console.log('error!!');
//     });


//Promise consume
// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // reject([101, 102, 103, 104])
//         resolve([101, 102, 103, 104])
//     }, 1500)
// })

// const getReceipe = recID => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             const receipe = {
//                 title: 'chips',
//                 author: 'hamza'

//             }
//             resolve(`${ID}: ${receipe.title}`);

//         }, 1500, recID);
//     });
// };

// const getRelated = publisher => {
//         return new Promise((resolve, reject) => {
//             setTimeout(pub => {
//                 const receipe = {
//                     title: 'burger',
//                     publisher: 'ahmed'
//                 }
//                 resolve(`${pub} : ${receipe.title}`)
//             }, 1500, publisher)
//         })
//     }
// getIDs                           //this part as async shows
//     .then(IDs => {
//         console.log(IDs);
//         return getReceipe(IDs[2]);
//         // return getRelated(IDs[3]);
//     })
//     .then(receipe => {
//         console.log(receipe);
//         // return getRelated(receipe.publisher);
//         return getRelated('hamza');
//     })
//     .then(receipe => {
//         console.log(receipe);
//     })
//     .catch(error => {
//         // console.log(error);
//         console.log('error!!');
//     });

// async function getReceipesAw() {
//     const IDs = await getIDs;
//     console.log(IDs);
//     const receipe = await getReceipe(IDs[3]);
//     console.log(receipe);
//     const related = await getRelated('hamza');
//     console.log(related);
//     return receipe;
// }
// // const rec = getReceipesAw();
// // console.log(rec);

// getReceipesAw().then(result => {
//     console.log(`${receipe}: result is the best ever!`);
// });



//Making Ajax Calls with fetch and promises
function getWeather(woeid) {
    fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            console.log(result);
            return result.json();
        })
        .then(data => {
            // console.log(data);
            console.log('Temperature in ${data.title} stay between ${today.min_temp} and ${today.max_temp}')
        })
        .catch(error =>
            console.log(error));

}
getWeather(2487956);