function Btn(num){
    var a=document.getElementById('result');
     a.value+=num;
}

function clrBtn(){
    var clrResult=document.getElementById('result');
    clrResult.value="";
}

function getResult(){
    var result=document.getElementById('result');
    result.value=eval(result.value);
}