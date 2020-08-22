// var screen=document.getElementById('load-screen');
// var loading=document.getElementById('loading');
// // setTimeout({function(){
//     // screen.
// // }

// // },1000)

// window.addEventListener('load',function(){
//     screen.style.fadeOut='slow';
//     screen.style.display= 'none';
// })

//popup
document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});