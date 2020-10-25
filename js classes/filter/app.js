//Adavance implementation
var textEl = document.getElementById('text');
var list=[
    'biryani','karai','beef pulao','korma','malai karai','kulfi'
]
var ul = document.getElementById('ul');


var listArray=list.map((el,i)=>{
    // console.log(el[i]);
        var textValue= textEl.value;

    var li= document.createElement('li');
    var liText=document.createTextNode(el);
    li.appendChild(liText);
    ul.appendChild(li);
  
    return el
 
})

            function filterList(){
                var textValue = textEl.value;
                console.log(listArray);
                for(var i=0; i<listArray.length;i++){

                    if(listArray[i].substring(0,textValue.length).indexOf(textValue) !== -1 ){
                        console.log(listArray[i]);
                        // listArray[i].style.display=''
                    }                    
                       
                }
                                    
            }



// 
// var a= 'hamza'
// var c=a.substring(0,1);
// console.log(c);

//filter list

// var textEl = document.getElementById('text');
// //  console.log(ul.childNodes);
// function filterList(){
//     var textValue = textEl.value;
//     console.log(textValue);
//     var listingText = ul.childNodes;
//     for(var i=0; i<listingText.length; i++){
//         console.log(listingText[i]);
//         if(listingText[i].nodeType===1){
//             // console.log(listingText[i]);
//                     console.log(listingText[i].innerHTML);
//                     if(listingText[i].innerHTML.toLowerCase().substring(0,textValue.length).indexOf(textValue)!== -1){
//                         listingText[i].style.display = '';
//                     }
//                     else{
//                    listingText[i].style.display = 'none'
//                     }

//         }
//     }

// }
