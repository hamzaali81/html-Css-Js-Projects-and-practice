var a='hamza'
var promise=new Promise((resolve,reject)=>{
  if(a==='hamza'){

    resolve('https://www.metaweather.com/api/location/search/?query=london')
  }
  else{
      reject("Yes it is false")
  }
})

promise.then((sucess)=>{
 console.log(sucess);
})
.catch((error)=>{
    console.log(error);
})


var url='https://jsonplaceholder.typicode.com/posts';
fetch(url)

.then((data)=>{
console.log(data.type);
console.log(data.status);
console.log(data.json());
})

