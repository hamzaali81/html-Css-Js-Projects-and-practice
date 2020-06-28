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
    


// var a='hamza ali was born in karachi';
// var b=a.indexOf('hamza ali');

// if(b!== -1){
//     a= a.slice(0,b)+' furqan in kashmir'+ a.slice(b+9);
//     console.log(a);
    
// }

// var a="hamza ali";
// console.log(a.slice(4));


// var a=["hamza","ali"];
// var b=["khan"];
// for(var i=0;i<9;i++){
// for(var j=0;j<i;j++){
//  document.write("*");
    
// }
// document.write("<br>")
// }


// var a=prompt("Enter the word");
// var b="";
// for(var i=a.length-1;i>=0;i--){
//    //4                4>0  
//    //3                3>0
//    //2                2>0
//    //1                1>0
//    //0                0=0  loop break
//   //madam

//m  //a
//a  //z
//d  //m
//a  //a
//m  //h
  
//a[i] ===> azmah
//a{i} ===> madam
//   // mada
//   //m
//    b+= a[i];
// console.log(b);

// }
// if(a===b){
//    console.log(b+" is a palindrome word");
   
// }
// else{
//    console.log("not a palindrome word");
   
// }





// var name="hamza ali";
// var a=name.lastIndexOf('ali');  //index find
// console.log(a);

// var name="hamza ali";
// var a=name.indexOf("ali");  //instance of index
// console.log(a);//don't change value


// var a="cake";
// var b=a.slice(0,1)
// console.log(b);

// var c = a.charAt(a.length-1);
// console.log(c);
// // console.log(a);





// var a="hamza";
// console.log(a.lastIndexOf("a"));
// var a="hamza";
// console.log(a.indexOf("a"));


// var a="hamza";
// var b=a.charAt(a.length-1)
// console.log(b);

// var d="hamza";
// // var e=d.slice(0,d+5);
// console.log(d.slice(d));

// var h="hamza!";
// for(var i=0;i<h.length;i++){
//     if(h[i]==="!"){
//         alert("Yes available")
//     }
    
// }




// var h="hamza ali was born in karachi";
// for(var i=0;i<h.length;i++){
//     if(h.slice(i,i+9)==='hamza ali'){
//         console.log(h[i]);
        
//         h = 'furqan '+h.slice(i+9);
//         console.log(h);
        
//     }
    
// }


// var a="hamza ali";
// var b=a.replace('hamza',"ahmed")
// console.log(b);



// var a="hamza ali was born in karachi. hamza ali";
// var b=a.replace(/hamza/g,"ahmed")
// console.log(b);

// var a=0.000001;
// var b=Math.round(a);
// console.log(b);

// var a=0.000001;
// var b=Math.ceil(a);
// console.log(b);


// var a=6;
// var b=Math.floor((Math.random(a)*6)+1)
// console.log(b);



// var c=6;
// console.log(Math.floor(Math.random(c)*6)+1);


// var a="19"
// var b=parseInt(a)-10;
// console.log(b);

// var a="109";
// var b=Number(a)-10;
// console.log(b);





// var a=100;
// var b=a.toString()+1;
// console.log(b);

// var a=10;
// var b=0.8789;
// var c=a*b
// var d=c.toFixed(2);
// console.log(d);
// var c=['sun','mon','tues','wed','thur','fri','sat']
// var a=new Date();
// var b=a.getDay()  //get method
// var d=c[b];
// console.log(d);



// var a=new Date();
// a.setFullYear(2007);
// console.log(a);

//function se value de rha tha
// function greet(peramater,peramater...){

// }
// greeting(arguments)
// function greeting(a,b){
//     // console.log(a+b);
//     return a+b;
    
// }
// var a=greeting(12,1);
// console.log(a);


// function sub(c){
//     // console.log(c-a);
//     return c-a;
// }

// var d=sub(50);

// function multi(){
// return a=10;
// }
// multi();
// console.log(a);



// function foo(){
//     // var a=10;
// }
// console.log(foo("hello"));



// function Order(biryani){
//     var costBiryani;
//     if(biryani>100){
//         costBiryani=biryani;
//     }
//    else if(biryani>50){
//         costBiryani=biryani + 5;
//     }
//     else if(biryani>150){
//         costBiryani=biryani;
//     }
//     else if(biryani>200){
//         costBiryani=biryani + 5;
//     }
//     else{
//         costBiryani = biryani + 10 * (biryani-30);
//     }
//     return costBiryani;
// }

// var a=Order(100);
// console.log(a);


// var a="hamza";

// switch(a){
//     case "ali":
//         console.log("Yes ali is present");
//         break
//     case "hamza" :
//         console.log("yes hamza is present");
        
// }





























































































































 
















































































