// import * as firebase from 'firebase/app';
// import 'firebase/auth';

// import * as firebase from 'firebase'
// const firebase = require('firebase')
import * as firebase from 'firebase/app';
import 'firebase/auth';

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.


      document.getElementById('user_div').style.display='block';
      document.getElementById('login_div').style.display='none';

    } else {
      // No user is signed in.

      document.getElementById('user_div').style.display='none';
      document.getElementById('login_div').style.display='block';

    }
  });




function login(){
    // window.alert("working");

var userEmail= document.getElementById('email_field').value;
var userPass= document.getElementById('password_field').value;

alert(userEmail + " "+ userPass)

firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...

    alert("Error :" +errorMessage);
  });

}

