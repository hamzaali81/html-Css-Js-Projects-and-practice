function showNumber(num){
    var result=document.getElementById('result');
    result.value+=num;
     
}

function clearResult(){
    var result=document.getElementById('result');
    result.value="";
}


function isEqualFinalResult(err){
    var result=document.getElementById('result');
                result.value=eval(result.value);
}

function backbtn(){
    var result=document.getElementById('result');
     result.value=result.value.slice(0,-1)
}
var a='hamza';
var b=a.slice(0,2)
console.log(b);

