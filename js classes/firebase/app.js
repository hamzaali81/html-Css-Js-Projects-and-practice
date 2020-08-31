var emailEl=document.getElementById('email');
var passEl=document.getElementById('password');

var auth=firebase.auth();
var db = firebase.firestore();



function signupUser(){
    console.log(emailEl.value,passEl.value);

    auth.createUserWithEmailAndPassword(emailEl.value, passEl.value)
    .then(function(sucess){
        console.log("Sucessfuly register");
        // redirectToHome();
    })
    
    
    .catch(function(error){
        
        console.log("***",error);
      });

}


function signInUser(){
    firebase.auth().signInWithEmailAndPassword(emailEl.value, password.value)
    .then(function(sucess){
        console.log("****sucess",sucess);
        redirectToHome();

    })
    .catch(function(error){
        
        console.log("***",error);
      });
       
}
  

function redirectToHome(){
    window.location.href='./home.html'
}

var todo=document.getElementById('todo-item')

function addTodoItem(){
    console.log(auth.currentUser.email);
    console.log(auth.currentUser.uid);
    db.collection("todo").add({
        todo: todo.value,
        uid : auth.currentUser.uid

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        todo.value='';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function getAllTodos(){
    db.collection("todo").get()
    
    .then((querySnapshot) => {
        console.log(auth.currentUser);
        querySnapshot.forEach((doc) => {
            // console.log('raw data',doc);
            // console.log(`${doc.id} => ${doc.data().todo}`);
            console.log(doc.id,doc.data().todo);
        });
    });
}
// saveWithCustomeDocID()
// function saveWithCustomeDocID(){
//     // Add a new document in collection "cities"
// db.collection("cities").doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });
// }



