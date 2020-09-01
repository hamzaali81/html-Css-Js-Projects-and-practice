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
    localStorage.setItem('userInfo',JSON.stringify(auth.currentUser))
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

// function getAllTodos(){
//     db.collection("todo").get()
    
//     .then((querySnapshot) => {
//         console.log(auth.currentUser);
//         querySnapshot.forEach((doc) => {
//             // console.log('raw data',doc);
//             // console.log(`${doc.id} => ${doc.data().todo}`);
//             console.log(doc.id,doc.data().todo);
//         });
//     });
// }



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


// function getCurrentUserTodo(){
//     db.collection("todo")
//     // .where('uid','==',auth.currentUser.uid)
//     .where('uid','==',JSON.parse(localStorage.getItem('userInfo')).uid)
//     .get()
//     .then((querySnapshot) => {
//         console.log(auth.currentUser);
//         querySnapshot.forEach((doc) => {
//             // console.log('raw data',doc);
//             // console.log(`${doc.id} => ${doc.data().todo}`);
//             console.log(doc.id,doc.data().todo);
//         });
//     });
// }



function getUserTodosRealtime(){
    db.collection("todo")
        .where('uid','==',JSON.parse(localStorage.getItem('userInfo')).uid)
       .onSnapshot(function (snapshot){
    //    console.log('SnapShot****',snapshot);
       snapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
            console.log("New Todo: ", change.doc.data());
        makeListing(change.doc)
        }
        // if (change.type === "modified") {
        //     console.log("Modified city: ", change.doc.data());
        // }
        if (change.type === "removed") {
            console.log("Removed todo: ", change.doc.data());
             deleteFromDom(change.doc.id)
        }
    });
       })
       //Readable form method
}

var divListing=document.getElementById('listing');
function makeListing(todoItem){
    var todoObject=todoItem.data();
    todoObject.id=todoItem.id;
    console.log(todoItem.data(),' todoItem',todoItem.id);
    
    var p=document.createElement('p');
    var paraText=document.createTextNode(todoObject.todo);
    p.appendChild(paraText);
    p.setAttribute('id',todoObject.id)
    
     var editBtn=document.createElement('button');
     var editTextNode=document.createTextNode('edit');
     editBtn.appendChild(editTextNode);


    var deleteBtn=document.createElement('button');
    var deleteTextNode=document.createTextNode('delete');
    deleteBtn.appendChild(deleteTextNode);
    deleteBtn.setAttribute('onclick','deleteTodo(this)')


    p.appendChild(editBtn);
    p.appendChild(deleteBtn);


    
    
    divListing.appendChild(p);

 }


 function deleteTodo(itemToDelete){
    console.log('item delete',itemToDelete.parentNode.id);
    var docId=itemToDelete.parentNode.id;
    
    db.collection("todo").doc(docId).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
 }


 function deleteFromDom(id){
     var itemToDelete=document.getElementById(id);
     console.log(id,itemToDelete);
     divListing.removeChild(itemToDelete);
 }