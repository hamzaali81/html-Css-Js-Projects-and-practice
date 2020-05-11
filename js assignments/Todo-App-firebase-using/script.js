// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var userNameRef=document.getElementById('username');
var cellnumberRef=document.getElementById('cellnumber');
var emailRef=document.getElementById('email');
var passwordRef=document.getElementById('password');
var passwordrepeatRef=document.getElementById('passwordrepeat');


function signup(){
    var user ={
        userName: userNameRef.value,
        cellNumber:cellnumberRef.value,
        email: emailRef.value,
        password: passwordRef.value,
        passwordrepeat: passwordrepeatRef.value
    }

    // console.log('user',user);
    firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
     .then(function(success){
console.log('sucess greeting' ,sucess)
     })
     .catch(function(error){
console.log('error' ,error)
     })



}