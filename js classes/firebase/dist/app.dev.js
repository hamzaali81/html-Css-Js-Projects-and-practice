"use strict";

var emailEl = document.getElementById('email');
var passEl = document.getElementById('password');
var auth = firebase.auth();
var db = firebase.firestore();

function signupUser() {
  console.log(emailEl.value, passEl.value);
  auth.createUserWithEmailAndPassword(emailEl.value, passEl.value).then(function (sucess) {
    console.log("Sucessfuly register"); // redirectToHome();
  })["catch"](function (error) {
    console.log("***", error);
  });
}

function signInUser() {
  firebase.auth().signInWithEmailAndPassword(emailEl.value, password.value).then(function (sucess) {
    console.log("****sucess", sucess);
    redirectToHome();
  })["catch"](function (error) {
    console.log("***", error);
  });
}

function redirectToHome() {
  window.location.href = './home.html';
}

function addTodoItem() {
  console.log(auth.currentUser.email);
  console.log(auth.currentUser.uid);
  db.collection("todo").add({
    todo: 'learning react',
    uid: auth.currentUser.uid
  }).then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })["catch"](function (error) {
    console.error("Error adding document: ", error);
  });
}