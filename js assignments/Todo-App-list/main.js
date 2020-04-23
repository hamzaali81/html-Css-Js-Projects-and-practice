localStorage.tasks = JSON.stringify([]);

function addEvent() {
    //from nput box
    let input = document.getElementById("Task_input")
        //take task in local storage
    let tasksArr = JSON.parse(localStorage.tasks);
    //store url in array push
    tasksArr.push(input.value);

    //Update array array
    localStorage.tasks = JSON.stringify(tasksArr);

    //empty the input box
    input.value = "";
    //update list
    updateList();

}

function updateList() {
    // get refrence ul (tasks)

    let ul = document.getElementById("tasks");
    //get tasks from localStorage
    let tasksArr = JSON.parse(localStorage.tasks);
    html = "";
    // for (let i = 0; i < tasksArr.length; i++) {
    for (let i = tasksArr.length - 1; i >= 0; i--) {

        console.log();
        // html = "";
        html += '<li class="list-group-item" id ="' + i + '">' + tasksArr[i] + '<span class="btn btn-danger float-right remove-btn" onclick="removeItem(this)">Remove</span></li>'
    }
    ul.innerHTML = html;


}


function removeItem(span_tag) {
    let index_id = span_tag.parentElement.id;
    let tasksArr = JSON.parse(localStorage.tasks);
    tasksArr.splice(index_id, 1);
    localStorage.tasks = JSON.stringify(tasksArr);
    updateList();
}