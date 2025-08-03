function addTask(){
    const input = document.getElementById("taskText");
    const text = input.value;
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("div");
    taskItem.textContent = text;
    taskList.appendChild(taskItem);

}
