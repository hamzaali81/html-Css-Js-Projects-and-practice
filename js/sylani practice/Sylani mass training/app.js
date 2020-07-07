//settinterval => repeatively running 
//setTimeout    =>   after sometime
//milisecinds
// var count=0;
// setInterval(function(){
//     // var a=new Date().setTime()
//     // document.write(a)
//     // console.log("running...");

//     // var count=0;
//     count++;
//     console.log(count);
    
// },1000)


//One time active 
// setTimeout(function(){

// console.log("running");

// },3000)


////////////////////////////////////////////
//Control setinterval 
// var count=0;
// var interval;
// interval= setInterval(function(){
// count++;
// console.log(count);

// },1000);


// setTimeout(() => {
//     clearInterval(interval) //stop setinterval
// }, 3000); //3 seconds

/////////////////////////////////
//Stop Watch
var min=0;
var sec=0;
var msec=0;
var minHeading=document.getElementById('min');
var secHeading=document.getElementById('sec');
var msecHeading=document.getElementById('msec');
var hourheading=document.getElementById('hour');


var interval;
function timer(){
    msec++;
    msecHeading.innerHTML=msec;
    if(msec>=100){
        sec++;
        secHeading.innerHTML=sec;
        msec=0;
    }
    else if(sec >=60){
        min++;
        minHeading.innerHTML=min;
        sec=0;
    }
    else if(min >=12){
        hour++;
        hourheading.innerHTML=hour;
        min =0;
    }
}

// interval=setInterval(timer,10)


function start(){
    interval=setInterval(timer,10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    min=0;
    sec=0;
    msec=0;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
      stop();
}








































