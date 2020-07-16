var result=document.getElementById('result');
 var ul=document.childNodes[1].childNodes[2].childNodes[5];
var addBtn=document.getElementById('add-btn');

var editItem;
 // console.log();
 // console.log(document.childNodes[1].childNodes[2].childNodes[5]);
function addItem(){
    if(result.value===''){
        console.log("Empty string");
    }
    else{
        var li=document.createElement('li')
        var textNode=document.createTextNode(result.value)
         li.appendChild(textNode)

        ul.appendChild(li);
        result.value='';
        console.log(ul);


        var button=document.createElement('button');
        button.setAttribute('onclick','deleteBtn(this)')



        var textBtn=document.createTextNode('delete');
        button.appendChild(textBtn);

         var editBtn=document.createElement('button');
         var textEdit=document.createTextNode("edit")
         editBtn.appendChild(textEdit)
editBtn.setAttribute('onclick','edit(this)')

        li.appendChild(button);
        li.appendChild(editBtn);   

console.log(li);   
// li.setAttribute('onclick','deleteBtn')
    // ul.removeChild(li)
    }
}

console.log(document.childNodes);
function deleteBtn(targetE1){
    // console.log("Hello world",targetE1.previousSibling.previousSibling);
// console.log(targetE1.parentNode);
// console.log(targetE1.parentNode.parentNode);
var liParent=targetE1.parentNode;
var ulParent=targetE1.parentNode.parentNode; 

ulParent.removeChild(liParent)

//    ul.removeChild(li)

}


function edit(targetE1){
// console.log("Hello Edit");
// console.log(targetE1.previousSibling.previousSibling.nodeValue);
result.value=targetE1.previousSibling.previousSibling.nodeValue;
addBtn.innerHTML='Save';
editItem=targetE1;

console.log(editItem);
addBtn.setAttribute('onclick','saveResult()');

}

function saveResult(){
    console.log('Hello Save');
editItem.previousSibling.previousSibling.nodeValue=result.value;
    addBtn.innerHTML='Add';

addBtn.setAttribute('onclick','addItem()');
result.value='';
editItem=undefined;
}



// var div1=document.getElementById('div-1');
// var div2=div1.childNodes[1];
// var firstP=div2.childNodes[1];
// // var firstP=div2.nextSibling.nextSibling;
// console.log(div1,div2);
// console.log(div2.firstChild.nextSibling);
// console.log(div2.lastChild.previousSibling);
// console.log(div2.nextSibling);
// console.log(div1.nextSibling.nextSiblings);


// console.log(document.childNodes);


// parentNode.firstChild
// parentNode.lastChild


// var h1=document.createElement('h1');
// var heading=document.createTextNode("Hello World");

// h1.appendChild(heading);

// console.log(h1);
// div2.insertBefore(h1,firstP);





// var specialPara=document.getElementById('special');
// console.log(specialPara.parentNode.parentNode);
// div2.removeChild(specialPara)


// // nodeName for element name in capital
// // nodeValue for textNode



// // hasAttribute()
// // getAttribute()
// // setAttribute()


/////////////////////////////////////////////////
//OLX one component in js 







// console.log(document.childNodes[1].childNodes[2]);

// var partP=document.childNodes[1].childNodes[2];
// var div=document.createElement('div');

// div.className='hidden';

// var src=document.createElement('img');
// src.setAttribute('src','a.jpg')
// src.setAttribute('width','150px')
// div.appendChild(src);
// var h1=document.createElement('h1');
// var h1text=document.createTextNode('RS 25,999')
// h1.appendChild(h1text);


// var p=document.createElement('p');
// var ptext=document.createTextNode('Samsung galaxy');
// p.appendChild(ptext);

// div.appendChild(h1);
// div.appendChild(p);
// console.log(div);

// partP.appendChild(div);









// // var userpick=prompt("Check laptop")
// var laptop={
//     name: 'hp',
//     model: 500,
//     series: 'slim pad'
// }


// console.log(laptop);
// laptop.ram='8GB';
// console.log(laptop);

// laptop['processor']='i5';
// // console.log(laptop[userpick]);
// console.log(laptop.userpick);  //undefined

// var user={}
// user.name='hamza';
// user.age=21;
// console.log(user);




// value change dynamically
// var user={};
// user[prompt("Enter property name")]="hamza";
// console.log(user);


//Many objects use new type for loop
// var car={
//     model:'ducati',
//     price:2000,
//     series:2017
// }

// for(var key in car){
//     console.log(car[key]);
// }

///////////////////////////////////////
//Constructor

//1.Use to access this keyword
//2.Many Object return like a clone

// function Student(name,age,rollno){
//    this.name1=name;
//    this.age1=age;
//    this.rollno1=rollno;
//    this.car= function(){
//        console.log('Hello '+this.name1);
//    }
// }

// var student1=new Student('ali',22,210);
// var student2=new Student('ahmed',21,213);
// var student3=new Student('umar',22,289);


// student1.car();
// student2.car();
// student3.car();

// delete student1.name1;

// if('this.name1' in Student){
//     console.log("yes present");
// }

// console.log(student1);
// console.log(student2);
// console.log(student3);





// var cars={
//     name: 'ducati',
//     design:'moto'
// }

// if('name' in cars){
//     console.log("Yes availble");
// }


// var shoppingCart=[{},{},{}];

// var shoppingCart=[];
// var products=[];
// var item={
// name:'xyz',
// desc:'xyz',
// price:250
// }


// function Product(productName,productDesc,productPrice){
// this.name=productName;
// this.desc=productDesc;
// this.price=productPrice;
// }
// // var productObj=new Product(nameEl.value,descEl.value,priceEl.value);
// Product.prototype.brand='hp';
// Product.prototype.working=function(num){
//     console.log("Hello See " +num);
// }
// var productObj=new Product(23000,'dell','i3');

// productObj.working(1)
// productObj.working(2)
// productObj.working(3)


// var priceCheck="price" in productObj;
// var priceCheckMethod=productObj.hasOwnProperty('brand');
// console.log(priceCheckMethod);
// console.log(priceCheck);


// console.log(productObj.brand);
// console.log(productObj);


// console.log(productObj);
// function addProduct() {
//     var productObj=new Product(nameEl.value,descEl.value,priceEl.value);
//     products.push(productObj);
   
// }












///////////////////////////////////////
//Array Helper
// 1.forEach
// 2.map
// 3.filter
// 4.find
// 5.every
// 6.some
// 7.reduce



//forEach

// var colors=['red','blue','green']


// for (var i=0;i<colors.length;i++){
//     // console.log(colors[i]);
//     console.log(colors[i]);
// }


// // for (var key in colors){
// //     console.log(key-1);
// // }

// colors.forEach((color)=>{
// console.log(color);
// })


//example 2

// var numbers=[1,2,3,4,5,6];
// var sum=0;

// numbers.forEach((number)=>{
// sum+=number;
// // console.log(sum);
// })





// console.log(sum);
/////////////////////////////
//2.map helper
var a=['car','suzuki','bike'];
var b=[];
for(var i=0;i<a.length;i++){
    b.push(a[i])
    console.log(b);
}
//ES5
var d=a.map(function(el){
return el
})
console.log(d);

//ES6
var e=a.map((el)=>{
return el;
})
console.log(e);

////////////
//filter
var things=[
    {type:'fruit'},
    {vegetable:'spnich'},
    {type:'fruit'}
];
var filterPro=[];
for(var i=0;i<things.length;i++){
    if(things[i].type==='fruit'){
     filterPro.push(things[i])
console.log(filterPro);
    }
}
console.log(filterPro);

var g=things.filter((el)=>{
return el.type==='fruit'
    // console.log(el);
console.log(el);
})

console.log(g);






///////////////////////////////////////////////////////
// filters Class Techno

var filterText=document.getElementById('filterText');
var listing=document.getElementById('listing')
function filterList(){
    // console.log("hello world");
// console.log(filterText.value);
var filter=filterText.value;
var listingText=listing.childNodes;
// console.log(listing.childNodes);

for(var i=0;i<listingText.length;i++){
    // console.log(listingText[i]);

// 1 is Markup
// 3 is junk Artifact

    if(listingText[i].nodeType===1){
        // console.log(listingText[i].innerHTML);
    if(listingText[i].innerHTML.toLowerCase().indexOf(filter.toLowerCase()) != -1 ){
        listingText[i].style.display ='';
    } 
    else{
    listingText[i].style.display ='none';
    }
    }
}
}







































////////////////////////////////////////////////////////////////////////////////////////////////////////
//Image Slider
// var sliderimage=document.getElementsByClassName("slider-image");
// console.log(sliderimage);
// var topImageIndex=0;
// var a=setInterval(function(){
// for(var i=0;i<sliderimage.length;i++){
//     sliderimage[i].style.zIndex=0;
// }

// sliderimage[topImageIndex].style.zIndex=10;
// topImageIndex++;

// if(topImageIndex>=sliderimage.length){
//     topImageIndex=0;
// }
// },4000)



// function swapRight(){
//     for(var i=0;i<sliderimage.length;i++){
//         sliderimage[i].style.zIndex=0;
//     }
    
//     sliderimage[topImageIndex].style.zIndex=10;
//     topImageIndex++;
    
//     if(topImageIndex>=sliderimage.length){
//         topImageIndex=0;
//     }
// }


// function swapLeft(){
//     for(var i=0;i<sliderimage.length;i++){
//         sliderimage[i].style.zIndex=0;
//     }
    
//     topImageIndex--;
    
//     if(topImageIndex<0){
//         topImageIndex=sliderimage.length;
//     }
//     sliderimage[topImageIndex].style.zIndex=10;
// }

// clearInterval(a)






















