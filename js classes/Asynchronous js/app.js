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
function getRecipe(){
    setTimeout(()=>{
        const recipeID = [523,883,432,974];
        console.log(recipeID);
        setTimeout((id)=>{
            const recipe ={
                title: 'biryani shop',
                publisher: 'hamza'
            }
            console.log(`${id}: ${recipe.title}`);
              
            setTimeout((publisher)=>{
             
                const recipe2 = {title: 'Italian pizza',publisher: 'ali'}
                console.log(recipe);

            },1000,recipe.publisher)


        },2000,recipeID[2])
    },1500)
}

getRecipe();







































