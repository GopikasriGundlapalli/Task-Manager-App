function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("task-list");

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="completeTask(this)">✔</button>
            <button onclick="deleteTask(this)">❌</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function completeTask(button) {
    let task = button.parentElement.parentElement;
    task.classList.toggle("completed");
}


function deleteTask(button) {
    let task = button.parentElement.parentElement;
    task.remove();
}
