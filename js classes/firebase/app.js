var emailEl=document.getElementById('email');
var passEl=document.getElementById('password');

var auth=firebase.auth();
var db = firebase.firestore();

var storage = firebase.storage();
var storageRef = storage.ref();

// console.log(storage);

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

var todo=document.getElementById('todo-item');
var fileInput=document.getElementById('file-item');

function addTodoItem(){
 
 
    
    //  console.log(fileInput.value);   // console.log(auth.currentUser.email);
 
 
    console.log(fileInput.files);
    var imageFile=fileInput.files[0];
    var imagesRef = storageRef.child('images/'+fileInput.files[0].name);
 
 
    var uploadTask = imagesRef.put(imageFile);

    // console.log(auth.currentUser.email);
    // console.log(auth.currentUser.uid);
    // db.collection("todo").add({
    //     todo: todo.value,
    //     uid : auth.currentUser.uid

    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //     todo.value='';
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
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

var unsubscribe;

function getUserTodosRealtime(){
    
   unsubscribe= db.collection("todo")
        .where('uid','==',JSON.parse(localStorage.getItem('userInfo')).uid)
       .onSnapshot(function (snapshot){
    //    console.log('SnapShot****',snapshot);
       snapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
            console.log("New Todo: ", change.doc.data());
        makeListing(change.doc)
        }
        if (change.type === "modified") {
            console.log("Modified todo: ",change.doc.id, change.doc.data());
            updateFromDOM(change.doc);
        }
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
     editBtn.setAttribute('onclick','editItem(this)')


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

 function updateFromDOM(doc){
     var domUpdateLi=document.getElementById(doc.id);
    //  console.log(domUpdateLi);
    //  console.log(domUpdateLi.childNodes[0].nodeValue=doc.data().todo);
     domUpdateLi.childNodes[0].nodeValue=doc.data().todo;
 }

 var todoBtn=document.getElementById('todo-btn');
 var editkey;
 
 function editItem(editTodo){
   editkey=editTodo.parentNode.id;
   console.log(editkey);
console.log(editTodo.parentNode.childNodes[0]);
todo.value =editTodo.parentNode.childNodes[0].nodeValue;
todoBtn.innerHTML='Save Todo';
todoBtn.setAttribute('onclick','updateTodo()');
 }



 function updateTodo(){
     console.log('Hello');
     db.collection("todo").doc(editkey).update({
        todo: todo.value
    })
    .then(function(){

        todoBtn.innerHTML='Add Todo';
        todoBtn.setAttribute('onclick','addTodoItem()');
        todo.value='';
        editkey=undefined;

    })
 }


 function logoutUser(){
    unsubscribe();
    auth.signOut()
    .then(function() {
        // Sign-out successful.
        localStorage.clear();
        window.location.href='./index.html'
      }).catch(function(error) {
        // An error happened.
      });
 }