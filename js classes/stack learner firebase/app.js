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



var todo= document.getElementById('todo-item');
function addTodoItem(){
// console.log(auth.currentUser);
// console.log(auth.currentUser.uid);

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


//RealTimeUpdates

var unsubscribe;
function getRealTimeUpdates(){
    unsubscribe = db.collection("todo").where('uid','==',JSON.parse(localStorage.getItem('userInfo')).uid)
    .onSnapshot(function(snapshot) {
        console.log(snapshot);
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                console.log("New todo: ", change.doc.data());
                makeListing(change.doc);
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data(),change.doc.id);
                UpdateFromDom(change.doc)
            }
            if (change.type === "removed") {
                console.log("Removed todo", change.doc.data(),change.doc.id);
                var docId= change.doc.id;
                deleteFromDom(docId);

            }
        });
    });
}



//second part firebase

//listing add
var divListing=document.getElementById('listing');

function makeListing(todoItem){
    //  console.log(data.data(),'data',data.id);
    var todoObject=todoItem.data();
    todoObject.id= todoItem.id; 
    console.log(todoObject,'data',todoItem.id);
    var p=document.createElement('p');
    p.setAttribute('id',todoObject.id)
    var paraText = document.createTextNode(todoObject.todo);
    p.appendChild(paraText);
    divListing.appendChild(p);
    // console.log(p);

    var editBtn = document.createElement('button');
    var edit = document.createTextNode('edit');
    editBtn.appendChild(edit)
    p.appendChild(editBtn);
    editBtn.setAttribute('onclick','editItem(this)')

    var deleteBtn = document.createElement('button');
    var deleteTextNode= document.createTextNode('delete')
    deleteBtn.appendChild(deleteTextNode)
    p.appendChild(deleteBtn);
    deleteBtn.setAttribute('onclick','deleteTodo(this)')
}

//Delete data in database
function deleteTodo(itemToDelete){
    console.log(itemToDelete.parentNode.id);
    var docId = itemToDelete.parentNode.id;
    db.collection("todo").doc(docId).delete()
    .then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

function deleteFromDom(id){
    var itemToDelete = document.getElementById(id);
    console.log(id,itemToDelete);
    divListing.removeChild(itemToDelete);
}
function UpdateFromDom(doc){
    var domUpdateLi = document.getElementById(doc.id)
   //  console.log(domUpdateLi.childNodes[0].nodeValue);
    var domliPick= domUpdateLi.childNodes[0].nodeValue;
   domliPick = doc.data().todo;
}

var todoBtn = document.getElementById('todo-btn');
var editKey ;

function editItem(editTodo){
  console.log(editTodo.parentNode.childNodes[0]);
editKey = editTodo.parentNode.id;
  todo.value = editTodo.parentNode.childNodes[0].nodeValue;
  todoBtn.innerHTML='Save Todo';

  todoBtn.setAttribute('onclick','updateTodo()')
}


function updateTodo(){
    console.log('test bhai');
    var TodoRef = db.collection("todo").doc(editKey);

    // Set the "capital" field of the city 'DC'
    return TodoRef.update({
        todo: todo.value
    })
    .then(function() {

    // var editPara= document.getElementById(editKey);


        todoBtn.innerHTML = 'Add';
        todoBtn.setAttribute('onclick','addTodoItem(this)');
        todo.value = '';
        editKey = undefined;
    
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}



function logoutUser(){
    unsubscribe();
    auth.signOut()
    .then(function() {
        
        window.location.href = './index.html';
    localStorage.clear()
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}