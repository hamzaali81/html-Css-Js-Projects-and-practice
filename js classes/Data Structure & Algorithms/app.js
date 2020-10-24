//Big O notation
//case 01 solution 01
// function addUpto(n){
// let total= 0;
// for(var i=0;i<=n;i++){
//     total +=i  //
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

// function addUpto(n){
//    return n*(n+1)/2
// }

// // var result2=addUpto(6);
// // console.log(result2);

// //performance testing

// let t1= performance.now();
// addUpto(1000000000)
// let t2= performance.now();
// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds.`);

//counting algorithm

//case 01
//common mistake
// function simpleCounting(n){

//    for (let i=0; i<=n;i++){
//       console.log('Counting up to down',i);
//    }
//    // console.log('bye bye', i);
// debugger;
//    console.log(n);
//    for (let j=n-1; j<=0;j--){
//       // debugger;
//       console.log('counting down to up',j);
//    }
//    // console.log(j);
// }

//case 02
// function simpleCounting(n){

//    for (let i=0; i<=n;i++){
//       console.log('Counting up to down',i);
//    }
   
//    console.log('oye oye');
//    for (let j=n-1; j>=0;j--){
//       console.log('counting down to up',j);
//    }
//    // console.log(j);
// }

// simpleCounting(6)

//case 03
//pairs algorithm

// function PrintallPairs(n){
//    for(var i=0; i<=n;i++){  
//       for(j=0; j<=n;j++){            
//          console.log(i,j);

//       }
//    }
// }

// PrintallPairs(3)

// var a=10;
// console.log(a++);
// console.log(a);
//logic of pairs algorithm
//  0 0
//  0 1
//  0 2
//  0 3
//  1 1
//  1 2
//  1 3
//  2 1
//  2 2
//  2 3
//  3 1
//  3 2
//  3 3

//

// var numberList= [10,23,3,323,12,9];
// // var a=numberList.split();
// console.log();
// numberList.map((el)=>{
//    return 
// })
// console.log(Math.max());

// console.log(Math.max(check));

// var a= Math.max(7,1,2,3,3);
// console.log(a);


// var a = [1,2,3,4,2121,1];

// for(var i=0; i<a.length; i++){
//   var b= Math.max(a[i]);
//       // console.log(a[i]);
// console.log(b);
//    }
// var a=[10,2,3];
// var b=Math.max.apply(Math,a);
// console.log(b);

// Double Number 
//case

// function arr(n){
//    let newArr = [];
//    for (var i=0 ;i<n.length; i++){
//       // console.log(n[i]);
//       newArr.push(2 * n[i]);
//       // console.log(newArr);
//    }
//    // console.log(newArr);
//    return newArr
// }
// var a=arr([2,21,3,45,6]);
// console.log(a);

//AtLeast
// function AtLeast5(n){
//    for(var i=0;i<=Math.max(5,n);i++){
//     console.log(i);
//    }
// }
// AtLeast5(30);
// console.log('bye bye');
// function AtLeast6(n){
//    for(var i=0;i<=Math.min(5,n);i++){
//     console.log(i);
//    }
// }
// AtLeast6(30);

//2d array
// var numberList = [
//    [2,3,4],
//    [1,5,6],
//    [9,7,7]
// ]

// for(var i=0;i<numberList.length;i++){
//    for(var j=0;j<numberList[i].length;j++){
//          console.log(numberList[i][j]);
//    }
// }


//charCount

// function charCount(str){
//    // var result = [];
//    var result = {};
//    for(var i=0; i<str.length;i++){
//       console.log(str[i]);
//       var char = str[i];
//       debugger;
//       if(result[char] > 0){  //1 > 0
// // console.log(result[char]);
//          result[char]++;
//          // result[char] = result[char] + 1; 
         
//       }
//       else{
//          result[char] = 1
//       }
//    }
//    // var v=Object.keys(result).length;
//    // console.log(v);
//    return result;
// }


// var a=charCount("hello");
// console.log(a);

// var b={
// }
// // b["hamza"] =1;
// console.log(b);

// same array detect pattern

// function same(){

// }

// same([],[])


function 




















