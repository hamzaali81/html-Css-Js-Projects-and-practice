var db = firebase.database();

// console.log(database);
fetchTodos()
function addTodo(){
    var form=document.querySelector('form');
    console.log(form);
    var formData= new FormData(form);
 console.log(formData);
 var newTododRef = db.ref('todos')
 var keyRef=newTododRef.push();
 var newTodo= {
     title: formData.get('title'),  //html name
     description: formData.get('description'),
     timestamp: (new Date()).getTime(),
     checked: false
 }
 keyRef.set(newTodo);
 form.reset();
 return false //form submit nhi hoga page refresh nhi hoga
}

function fetchTodos(){
    var table = document.querySelector('tbody');
    var todosRef = db.ref('todos');
    todosRef.on('child_added',(data)=>{
        console.log(data.val(),data.key);
        var row = generateRow(data.val(),data.key)    
        // var tr = document.createElement('tr');
        table.innerHTML+= row;
     })
}


function generateRow(data, key) {
    return `<tr>
      <td>${data.title}</td>
      <td>${data.description}</td>
      <td>${(new Date(data.timestamp)).toLocaleDateString()}</td>
      <td>${data.checked ? 'Done' : 'Pending'}</td>
      <td><button class='btn btn-danger' onclick="deleteRow('${key}',this)"> X</button></td>
    </tr>`
  }


  function deleteRow(key, row) {
    document.querySelector('tbody').removeChild(row.parentElement.parentElement);
    var ref = db.ref('todos/' + key).set({});
  }