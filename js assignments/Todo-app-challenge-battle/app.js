var todo = document.getElementById('todo')
var todoItems = document.getElementById('todoItems');
var todoBtn= document.getElementById('addbtn');
var todoList = []
var editIndex;

function addTodo () {
  todoList.push(todo.value);
  todo.value ='';
  renderList();
}

function renderList () {
    todoItems.innerHTML = '';
  for (var i = 0; i < todoList.length; i++) {
    var div = document.createElement('div');
    var span = document.createElement('span');
    var spanText = document.createTextNode(todoList[i]);

    var editBtn = document.createElement('button');
    var editText = document.createTextNode('edit');
    editBtn.appendChild(editText);
    editBtn.setAttribute('onclick', 'editTodo(' + i + ')');

    var delBtn = document.createElement('button')
    var delText = document.createTextNode('delete')
   
    delBtn.appendChild(delText)
    delBtn.setAttribute('onclick', 'deleteTodo(' + i + ')');

    span.appendChild(spanText);
    div.appendChild(span);
     div.appendChild(delBtn);
    div.appendChild(editBtn);
    todoItems.appendChild(div)
  }
}

function deleteTodo (todiIndex) {
    todoList.splice(todiIndex, 1);
    renderList();
}
function editTodo (todiIndex) {
    editText=todiIndex;
     todo.value =todoList[todiIndex];
     todoBtn.innerHTML='Save';
     
    
    todoBtn.setAttribute('onclick','saveTodo()')
}

function saveTodo () {
    todoList.splice(editIndex,1,todo.value)
    todo.value = '';
    todoBtn.innerHTML = 'Add';
    todoBtn.setAttribute('onclick', 'addTodo()');
    renderList();

  
}
