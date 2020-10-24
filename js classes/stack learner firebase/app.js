var emailEl= document.getElementById('email');
var passEl=document.getElementById('password');
var auth = firebase.auth();
var db = firebase.firestore();

var storage = firebase.storage();
var storageRef = storage.ref();


var usernameEl= document.getElementById('username');
var profilePicEl = document.getElementById('profile-pic');
// var userRoleEl = document.getElementsByClassName('user-role');
var userRoleEl ;

function userRoleDefine(userRole){
     userRoleEl = userRole
}


function signupUser(){          
    
    
    
    // console.log(emailEl.value,passEl.value);
    console.log(profilePicEl.files[0]);
    // console.log(userRoleEl);
    auth.createUserWithEmailAndPassword(emailEl.value, passEl.value)
    .then((sucess)=>{
        //  console.log(usernameEl.value, profilePicEl.files[0], userRoleEl.checked[0],userRoleEl.checked[1]);
        console.log(sucess);
        var imageFile = profilePicEl.files[0];
        console.log(imageFile);
        var imagesRef = storageRef.child('dp/'+profilePicEl.files[0].name); 

   imagesRef.put(imageFile)
    .then(function(){
        imagesRef.getDownloadURL().then(function (result) {
            console.log('result',result);
            db.collection("users").add({
                        
                        email: emailEl.value,
                        userName: usernameEl.value,
                        profilePic: result,
                        userRole: userRoleEl,
                        uid: sucess.user.uid
                    })
                    .then(function(sucess){
                        console.log('page redirection==>',sucess);
                            redirectToHome();
                    }) 

 })
    })

        //////////////////////////
//    
      
    //imagesRef.put(imageFile)
    //.then(function(){
 //        imagesRef.getDownloadURL().then(function (result) {
            // console.log('result',result)
 //})
    //})

        // redirectToHome();
    })

    .catch(function(error) {
        console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}


//ex
// var uploadTask = imagesRef.put(imageFile);
// console.log(uploadTask);

// //     //complete method must see
// uploadTask.snapshot.ref.getDownloadURL()
// .then(function(url) {
//     console.log('url =>',url);
//     db.collection("todo").add({
//         // todo: 'learning JS',
//         email: emailEl.value,
//         username: usernameEl,
//         profileDp: url,
//         userRole: userRoleEl,
//         uid: sucess.user.uid
//     })
// })

function signin(){
    console.log(emailEl.value,passEl.value);
    auth.signInWithEmailAndPassword(emailEl.value, passEl.value)
    
    .then((sucess)=>{
       console.log('sucess',sucess.user.uid);
    //    redirectToHome()
        db.collection("users").where('uid','==',sucess.user.uid).get()
        .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                        console.log(doc.id,doc.data());
                        // console.log(auth.currentUser); //this object provide all information of user
                        console.log('raw data',doc);
                        localStorage.setItem('userData',JSON.stringify(doc.data()));
                        redirectToHome();
                        // redirectToHome();
                    });
                });
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
    window.location.href = './home.html';
} 



var todo= document.getElementById('todo-item');
var fileInput = document.getElementById('file-item');

function addTodoItem(){
// console.log(auth.currentUser);
// console.log(auth.currentUser.uid);

//    console.log(fileInput.value);
//    console.log(fileInput.files[0].name);

//path identify step
var imageFile = fileInput.files[0];

//ref step

if(imageFile && todo.value){


    var imagesRef = storageRef.child('images/'+fileInput.files[0].name); 
    
    //upload step
    var uploadTask = imagesRef.put(imageFile);
    console.log(uploadTask);
    
    //complete method must see
    uploadTask.snapshot.ref.getDownloadURL().then(function(url) {
            console.log('url =>',url);
            db.collection("todo").add({
        // todo: 'learning JS',
        todo: todo.value,
        uid:  auth.currentUser.uid,
        username: usernameEl,
        todoImageUrl: url
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        todo.value = ''
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    })
}

else{
    alert('image and todo')
}
// db.collection("todo").add({
    //     // todo: 'learning JS',
    //     todo: todo.value,
    //     uid:  auth.currentUser.uid
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //     todo.value = ''
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
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
var dp= document.getElementById('dp');
console.log(dp);
function getRealTimeUpdates(){
    var userData=localStorage.getItem('userData');
     userData=JSON.parse(userData);
        // console.log(profilePic);
    // document.getElementById('dp').src = userData.profilePicEl;
    dp.src = userData.profilePic;
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

 var imgEl= document.createElement('img');
 imgEl.setAttribute('src',todoObject.todoImageUrl);
 imgEl.setAttribute('width','40');
 imgEl.setAttribute('height','40');
 p.appendChild(imgEl);



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