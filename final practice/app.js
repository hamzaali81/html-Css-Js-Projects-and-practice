var search=document.getElementById('search');
var listingText=document.getElementById('listing');

function filterList(){
    // console.log(search.value);
    var checkvalue=search.value.toLowerCase();
    // console.log(listing.childNodes);
    var listCheck=listingText.childNodes;
    for(var i=0;i<listCheck.length;i++){
        // console.log(listCheck[i]);
    if(listCheck[i].nodeType === 1){
        console.log(listCheck[i].innerHTML);

         var onelist= listCheck[i].innerHTML.toLowerCase();
    if(onelist.indexOf(checkvalue) != -1){
        listCheck[i].style.display = '';
    }
    else{
        listCheck[i].style.display = 'none';

    }
}
}
}
var body=document.childNodes[1].childNodes[2];

function component(){

    console.log(document.childNodes[1].childNodes[2]);
    var divEl=document.createElement('div');
    console.log(divEl);
    
    
    var imgEl=document.createElement('img');
    imgEl.setAttribute('src','img1.jpg');
    imgEl.className='hidden';
    divEl.appendChild(imgEl)
    
    var buttonEl=document.createElement('button');
    var buttonText=document.createTextNode('Add');
    buttonEl.appendChild(buttonText);
    divEl.appendChild(buttonEl);
    
    body.appendChild(divEl)
    
}
