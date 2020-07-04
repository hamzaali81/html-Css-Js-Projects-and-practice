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
