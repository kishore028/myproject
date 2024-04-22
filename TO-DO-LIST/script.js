// Function to add a new task
function addTask() {
    var inputValue = document.getElementById("taskInput").value;
    if (inputValue.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    var listItem = document.createElement("li");
    listItem.textContent = inputValue;
    listItem.addEventListener("click", toggleCompleted);
    document.getElementById("taskList").appendChild(listItem);
    document.getElementById("taskInput").value = "";
}

// Function to mark task as completed or incomplete
function toggleCompleted() {
    this.classList.toggle("completed");
}

// Function to remove completed tasks
function removeCompleted() {
    var completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach(function(task) {
        task.parentNode.removeChild(task);
    });
}

// Event listener for "Enter" key press
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

// Event listener for "Add Task" button click
document.getElementById("addTaskBtn").addEventListener("click", addTask);

// Event listener for "Remove Completed" button click
document.getElementById("removeCompletedBtn").addEventListener("click", removeCompleted);
