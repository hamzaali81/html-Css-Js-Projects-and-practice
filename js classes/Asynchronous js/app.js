// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((response)=> response.json())
// .then((sucess)=> console.log(sucess))
// .catch((err)=>{
//     console.error('error==>',err);

// })

// var test = new Promise((res,rej)=>{
//     var a=[1,2,3,4,5]
//     setTimeout(()=>{
//        res(a)
//     },1000)
// })


// // test.then((res)=>{
// //     console.log(res);
// // })
// async function getData(){
//      var ok = await test;
//      console.log(ok);
//  }

//  getData()



 //asynchronous js

 //synchronous js

// const second = ()=>{
//     // console.log('Second');
//     setTimeout(()=>{
//          console.log('Second bhai');
//     },1000)
// }

//  const first = ()=>{
//      console.log('hey there');
//      second();
//      console.log('The end');
//  }

//  first();

////////////////////////////////////////////////
//callback hell
//asynchronous in old way
// function getRecipe(){
//     setTimeout(()=>{
//         const recipeID = [523,883,432,974];
//         console.log(recipeID);
//         setTimeout((id)=>{
//             const recipe ={
//                 title: 'biryani shop',
//                 publisher: 'hamza'
//             }
//             console.log(`${id}: ${recipe.title}`);
              
//             setTimeout((publisher)=>{
             
//                 const recipe2 = {title: 'Italian pizza',publisher: 'ali'}
//                 console.log(recipe);

//             },1000,recipe.publisher)


//         },2000,recipeID[2])
//     },1500)
// }

// getRecipe();


// from callback hell to promises
const getIDs = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([523,883,432,974])
    },1000)
}) 

const getRecipe = recID =>{
   return new Promise ((resolve, rejected)=>{
    setTimeout((ID)=>{

        const recipe = {tiltle: 'chips',publisher: 'hamza'}
        // console.log(`${id}: ${recipe.tiltle}`);
        resolve((`${ID}: ${recipe.tiltle}`));
    },1500,recID)
   })
};

const getRelated = publisher =>{
    return new Promise((resolve,reject)=>{
        setTimeout(pub=>{
         const recipe = {title: 'Italian Pizza',publisher: 'ahmed'} 
        //  resolve(`${pub} ${recipe}`);  
         resolve(`${pub} ${recipe.title}`);  
        },1500,publisher)
    })
}

// getIDs
// .then((IDs)=>{
//          console.log(IDs);
//         // getRecipe(IDs[2]).then()
//         return getRecipe(IDs[2])
//         })
//         .then(recipe =>{
//           console.log(recipe);
//         //   return getRelated(recipe.publisher)
//           return getRelated('hamza ali')
//         })
//         .then(recipe =>{
//             console.log(recipe);
//         })
//         .catch(error =>{
//             console.log('Error !');
//         })

//asyn/await

async function getRecipeItem(){
  let result1=  await getIDs;
  console.log(result1);

  let result2 = await getRecipe(result1[2]);
  console.log(result2); 

  let result3 = await getRelated('ali');
  console.log(result3);
}

getRecipeItem();


//fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>{
    console.log(response);
    return response.json();

})
.then((data)=>{
    console.log(data);

})
.catch((err)=>{
    console.log('ok error note',err);

})


async function getData(){
   var result=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//    console.log(result.json());
   return result.json()
}

let rec=getData().then((result)=>{
    console.log(result);
});
// console.log(rec);


































