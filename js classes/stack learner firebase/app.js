var emailEl= document.getElementById('email');
var passEl=document.getElementById('password');
var auth = firebase.auth();
var db = firebase.firestore();



function signupUser(){
    console.log(emailEl.value,passEl.value);

  auth.createUserWithEmailAndPassword(emailEl.value, passEl.value)
    .then((sucess)=>{
        console.log(sucess);
        redirectToHome();
    })
    .catch(function(error) {
        console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}


function signin(){
    console.log(emailEl.value,passEl.value);
    auth
    .signInWithEmailAndPassword(emailEl.value, passEl.value)
    
    .then((user)=>{
       console.log('sucess',user.user.uid);
       redirectToHome()
    })
    
    .catch(function(error) {
    console.log('error sign in',error);
    
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}


function redirectToHome(){
    localStorage.setItem('userInfo',JSON.stringify(auth.currentUser))
    window.location.href = './home.html'
} 



function addTodoItem(){
// console.log(auth.currentUser);
// console.log(auth.currentUser.uid);

var todo= document.getElementById('todo-item');
    db.collection("todo").add({
        // todo: 'learning JS',
        todo: todo.value,
        uid:  auth.currentUser.uid
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        todo.value = ''
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

//Custom ID create in firebase
// saveWithCustomDocID()
// function saveWithCustomDocID(){
//     // Add a new document in collection "cities"
// db.collection("cities").doc("LA").set({
//     name: "hamza",
//     state: "lyari",
//     country: "pakistan"
// })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });
// }


//Data Mangwana ka liya
// function getAllTodos(){
    //     db.collection("todo").get().then((querySnapshot) => {
        //         querySnapshot.forEach((doc) => {
            //             console.log(doc.id,doc.data());
            //             // console.log(auth.currentUser); //this object provide all information of user
            //             console.log('raw data',doc);
            //         });
            //     });
            // }



//             //Condition pick to todo to user current list
//         function getAllTodos(){
//      db.collection("todo")
//      .where('uid','==',JSON.parse(localStorage.getItem('userInfo')).uid)
//      .get().then((querySnapshot) => {
//      querySnapshot.forEach((doc) => {
//      console.log(doc.id,doc.data());
// // console.log(auth.currentUser); //this object provide all information of user
// console.log('raw data',doc);
//     });
//     });
//    }



function getRealTimeUpdates(){
    db.collection("todo").where('uid','==',JSON.parse(localStorage.getItem('userInfo')).uid)
    .onSnapshot(function(snapshot) {
        console.log(snapshot);
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                console.log("New todo: ", change.doc.data());
            }
            // if (change.type === "modified") {
            //     console.log("Modified city: ", change.doc.data());
            // }
            // if (change.type === "removed") {
            //     console.log("Removed city: ", change.doc.data());
            // }
        });
    });
}
