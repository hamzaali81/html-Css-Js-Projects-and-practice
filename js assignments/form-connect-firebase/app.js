var userNameRef=document.getElementById('username');
var cellnumberRef=document.getElementById('cellnumber');
var emailRef=document.getElementById('email');
var passwordRef=document.getElementById('password');
var passwordrepeatRef=document.getElementById('passwordrepeat');
var customError=document.getElementById('custom-error');

function signup(){
    var user ={
        userName: userNameRef.value,
        cellNumber:cellnumberRef.value,
        email: emailRef.value,
        password: passwordRef.value,
        passwordrepeat: passwordrepeatRef.value
    }


var valid =customValidation(user);
if(valid){
    console.log('valid',valid); //createUserWithEmailAndPassword 
    var defaultAuth = firebase.auth();

    defaultAuth.createUserWithEmailAndPassword (user.email, user.password)
    .then(function(success){
console.log('sucess greeting' ,success)
    })
    .catch(function(error){
console.log('error' ,error);
setTimeout(()=>{
    customError.style.display='none';

},3000)
    })
    customError.style.display= 'block';
    setTimeout(()=>{
        customError.style.display='none';

    },3000)
}
else{
    console.log('unvalid',valid)
}







//     // console.log('user',user);
//     firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
//      .then(function(success){
// conssole.log('sucess greeting' ,success)
//      })
//      .catch(function(error){
// console.log('error' ,error)
//      })



}




function customValidation(_user){
var valid=true;
for(var key in _user){
    if(_user[key]=== '' ||  _user[key] === undefined){
        valid =false;
    }
}
    if(_user.password !== _user.passwordrepeat){
        valid = false;
    }

return valid;
}