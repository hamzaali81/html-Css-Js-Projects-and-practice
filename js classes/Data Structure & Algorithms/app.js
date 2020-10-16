//Big O notation
//case 01 solution 01
// function addUpto(n){
// let total= 0;
// for(var i=0;i<=n;i++){
//     total +=i
// }
// return total;
// }
// // var result1=addUpto(6);

// //performance testing
// let t1= performance.now();
// addUpto(1000000000)
// let t2= performance.now();
// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds.`);
// console.log(result1);

//solution 02

function addUpto(n){
   return n*(n+1)/2
}

// var result2=addUpto(6);
// console.log(result2);

//performance testing

let t1= performance.now();
addUpto(1000000000)
let t2= performance.now();
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds.`);