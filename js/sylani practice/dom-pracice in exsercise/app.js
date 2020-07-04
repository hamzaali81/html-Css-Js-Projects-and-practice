const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const password2 =document.getElementById('password2');



//show input error message
function showError(input,message){
const formControl=input.parentElement;
formControl.className = 'form-control error';

const small = formControl.querySelector('small');
small.innerText=message;
}

//show Success  outline
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

//Check email is valid

function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

return re.test(String(email).toLowerCase())
}
//checked required field

function checkRequired(inputArr){
  inputArr.forEach(function(input){
// console.log(input.value);

if(input.value.trim()===''){
    showError(input,`${input.id} is required`)
}
else{
    showSuccess(input);
}

  })
}

//Check input length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input , `$getFieldName{input} must be at least ${min} characters`)
    }
    else if(input.value.length > max){
showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    }
}

//Get fieldname
function getFieldName(input){
return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//Event listener
form.addEventListener('submit',function(e){
    e.preventDefault();
    // console.log(username.value);
    // checkRequired(username);
    //checkRequired(password)
checkRequired([username,email,password,password2]);
checkLength(username,3,15);
checkLength(password,6,25)   


})










































































// const form =document.getElementById('form');
// const username =document.getElementById('username');
// const email =document.getElementById('email');
// const password =document.getElementById('password');
// const password2 =document.getElementById('password2');



// //show input error message
// function showError(input,message){
// const formControl=input.parentElement;
// formControl.className = 'form-control error';

// const small = formControl.querySelector('small');
// small.innerText=message;
// }

// //show Success  outline
// function showSuccess(input){
//     const formControl=input.parentElement;
//     formControl.className='form-control success';
// }

// //Check email is valid

// function isValidEmail(email){
// const re= ;
// return re.test(String(email).toLowerCase())
// }



// //Event listener
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     // console.log(username.value);
    
//    if(username.value===''){
// // alert('username is required')
// // username.style.border='2px solid red'
// showError(username,'Username is required')
// }else{
//     showSuccess(username);
// }
// if(email.value===''){
//     // alert('username is required')
//     // username.style.border='2px solid red'
//     showError(email,'Email is required')
//     }else{
//         showSuccess(email);
//     }
//     if(password.value===''){
//         // alert('username is required')
//         // username.style.border='2px solid red'
//         showError(password,'Password is required')
//         }
//         else if(!isValidEmail(email.value)){
//             showError(email,'Email is not valid')
//         }
//         else{
//             showSuccess(password);
//         }
//         if(password2.value===''){
//             // alert('username is required')
//             // username.style.border='2px solid red'
//             showError(password2,'Password 2 is required')
//             }else{
//                 showSuccess(password2);
//             }
// })