// var a=[
//     ["hamza"," designer ","karachi"],
//     ["ali"," developer ","lahore"]
// ] 
// var a=[
//     [ ],
//     [ ]
// ]
//  a[0][0]="hamza";
//  a[0][1]="designer";
//  a[0][2]="karachi";
//  a[1][0]="ali";
//  a[1][1]="developer";
//  a[1][2]="lahore";
 

// for(i=0;i<3;i++){
//     for(j=0;j<3;j++){
//         document.write(a[i][j])
//     }
//     document.write("<br>")
// }



// var a=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// // var b=[1,2];
// // var b=[[[1,2],[2,3]]]
// // for(var i=0;i<a.length;i++){
// //     for(var j=0;j<a.length;j++){
// //       console.log(a[i][j]);
    
        
// //     }
// //     // console.log(a[i][j]);
// //     break;
// // }
// for(var i=0;i<4;i++){
//     for(var j=0;j<4;j++){
//     //   console.log(a[i][j]);
// document.write(a[i][j])
//     // break
        
//     }
//     // console.log("<br>");

//     document.write("<br>")
//     // console.log(a[i][j]);
//     // break;
// }



// var a=10;
// for (a=1;a<=10;a++){
//     document.write(a+"<br>")
// }
// var table=prompt("Which table");
// var tablelength=prompt("what length of table")
// for(var i=1;i<=tablelength;i++){
//     console.log(table+ "*"+i+" = " +i*table);
    
// }


// var fruits=["apple","banana","mango","orange","straberry"];
// for(var i=0;i<fruits.length;i++){
//     // document.write(fruits[i]+"<br>")
//     document.write("Elements of Array index "+fruits[i] +fruits.indexOf(fruits[i]) +"<br>")
// }



// var a = ["cake", "applpie", "cooke", "chip", "patt"];
// var search=prompt("Serch fruit")
// for(var i=0;i<a.length;i++){
//     if(search===a[i]){
//         document.write("Yes available in this list "+a[i]);
//     }
// }

// var a=[1,2,3];
// var b=[0];
// var c=[]

// for(var i=0;i<a.length;i++){
//     for(var j=0;j<b.length;j++){
//     c.push(a[i] + b[j]);
// document.write(c);     
//     }
//     document.write("<br>");
// }




// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
//  var fullNames = [];
//  for (var i = 0; i < firstNames.length; i++) {
//  for (var j = 0; j < lastNames.length; j++) {
// fullNames.push(firstNames[i] + lastNames[j]);
// document.write(fullNames,"<br>");


//  }
//  }

// for(var a=10; a>=1;a--){
//     console.log(a);
    
// }

// for(var a=0; a<=20;a++){
//    if(a%2!==0){
//        console.log("Odd number "+a);
       
//    }
    
// }
// for(var a=0; a<=20;a++){
//     if(a%2===0){
//         console.log("Odd number "+a);
        
//     }
     
//  }

// for(var a=1; a<=10;a++){
//     console.log(a*2+"K");
    
// }


//  (0 * 1)/2

// var a=[24,53,78,91,12];
// var b=Math.max.apply(null,a)
// console.log(b);


//  var a=[24,53,78,91,12];

// for(var i=0;i<a.length;i++){
//   if(a[i]<=100){
// console.log("largest value"+a[i]);

//   }
    
    
    
// }
// const array = [-1,0,3,100, 99, 2, 99]


// function biggestNumberInArray(arr) {
//     for (let i = 0; i < array.length; i++) {
//        for(let j=1;j<array.length;j++){
//            for(let k =2;k<array.length;k++){
//                if(array[i]>array[j] && array[i]>array[k]){
//                      console.log(array[i]);
//             }
//           }
//        }
//     }
//  }
// biggestNumberInArray(array[i][j[k]])

// var city=["karachi","lahore","islamabad"]
// var search=prompt("Search city");
// for(var i=0;i<city.length;i++){

//    if(city[i]===search.toLowerCase()){
//    console.log("Yes city presnt in this list");
   
//    }
// }


// var city=["karachi","lahore","islamabad"]

// var a=city.slice(0,2);
// console.log(a);

//  var city=["karachi","lahore","islamabad"]

// city.splice(2,1)
// console.log(city);

// var a="My name is hamza";
// var b=a.slice(0,9);
// console.log(b);



//  var monthAbb=["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"];



// var a=["hamza","ali"];
// var b=a.slice(1)
// console.log(b);




// var month=prompt("Enter the month")
// //  var search=prompt("enter month");
// //  for (var i=0;i<month.length;i++){
//    // monthAbb=[]
//     if(month.length>3){
//             var monthAbb=month.slice(0,3);
//               console.log(monthAbb);
//     }
//  }

// var someText=prompt("enter some text");
// var str=someText.length;
// for(var i=0;i<str;i++){
//    if(someText.slice(i,i+1)===" "){
//        alert("no double spaces!");
//        break;
//    }
// }

//  var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
//  break;

//  }
//  }




// var text="world war II";
// for(i=0; i<text.length;i++){
//    if(text.slice(i,i+12)==="world war II"){
//        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);

//       console.log(text);
      
//    }
// }
//  var name="my name is hamza";
//  var b=name.charAt(name.length-1);
//  console.log(b);

//  var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
//  break;

//  }
//  }




//Finding Strings

// var text="World war II It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy"; 

// for(var i=0;i<text.length;i++){
//     if(text.slice(i,i+12)==="World war II"){
//         // text=text.slice(0,i) + "the second world war" + text.slice(i+12);
//         text="the second world war" + text.slice(i+12);

//         console.log(text);
//            text=text.slice(0,i) + "the second world war" + text.slice(i+12);
//            console.log(text);
//     }
// }


// var a="hamza ali was born in karachi";

// for(var i=0;i<a.length;i++){
//     if(a.slice(i,i+9)==='hamza ali'){
//         a= a.slice(i) +' furqan born in kashmir '+a.slice(i+9);
//         console.log(a);
        
//     }
// }

// var a='hamza';
// var b=a.indexOf();
// console.log(b);

// var text="World war II It is startling to think that, even in the darkest depths of World War II"
//  var firstChar = text.indexOf("World War II");
//  if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
//     console.log(text);
    
//  }
    























































 
















































































