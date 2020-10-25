// var textEl = document.getElementById('text');


// var list=[
//     'biryani','karai','beef pulao','korma','malai','kulfi'
// ]
// function filterList() {
//     console.log(textEl.value);
    
    
//     var ul = document.getElementById('ul');
    
//     list.map((el)=>{
//         console.log(el);
//         var li= document.createElement('li');
//         var liText=document.createTextNode(el);
//         li.appendChild(liText);
//         ul.appendChild(li);
//         // console.log(ul);
//         if(el.indexOf(textEl.value) !== -1){
//               console.log('sahi hai bhai');
//         }
//         else{
//             console.log('oops');
//         }
        
//     })
// }

var a= 'hamza'
var c=a.substring(0,1);
console.log(c);

var ul = document.getElementById('ul');
var textEl = document.getElementById('text');


//  console.log(ul.childNodes);
function filterList(){
    var textValue = textEl.value;
    console.log(textValue);
    var listingText = ul.childNodes;
    for(var i=0; i<listingText.length; i++){
        console.log(listingText[i]);
        if(listingText[i].nodeType===1){
            // console.log(listingText[i]);
                    console.log(listingText[i].innerHTML);
                    if(listingText[i].innerHTML.toLowerCase().substring(0,textValue.length).indexOf(textValue)!== -1){
                        listingText[i].style.display = '';
                    }
                    else{
                   listingText[i].style.display = 'none'
                    }

        }
    }

}
