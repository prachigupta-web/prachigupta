<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="todo.css">

<style> 
body {
    font-family: Arial, sans-serif;
    display: flex;
    background-color: rgb(220, 68, 68);
}

.todo-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 50px;
    border: 1px solid #d23434;
    border-radius: 7px;
    box-shadow: 0 2px 5px rgba(163, 42, 42, 0.1);
    display: flex;
    justify-content: center;
    text-align: center;
}

.todo-item {
    display: flex;
    align-items: center;
    margin-bottom: 100px;
    justify-content: center;
    text-align: center;
}

.todo-item input[type="checkbox"] {
    margin-right: 100px;
    padding: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
}

.todo-item input[type="text"] {
    flex: 50;
    padding: 100px;
    border: 8px solid #2c1d1d;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 200px;
    height: 100px;
}

.add-todo {
    margin-top: 100px;
    justify-content: center;
    text-align: center;
}
</style>
</head>
<body>
    <div class="container">
        <h2>To-Do List</h2>
        <input type="text" id="taskInput" placeholder="Add new task...">
        <ul id="taskList">
            <!-- Tasks will be added dynamically here -->
        </ul>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const taskInput = document.getElementById('taskInput');
            const taskList = document.getElementById('taskList');

            // Function to add a new task
            function addTask(taskText) {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${taskText}</span>
                    <button class="delete-btn">Delete</button>
                `;
                taskList.appendChild(li);

                // Clear input field after adding task
                taskInput.value = '';

                // Attach event listener to delete button
                const deleteBtn = li.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', function() {
                    li.remove();
                });
            }

            // Event listener for adding a new task
            taskInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    const taskText = taskInput.value.trim();
                    if (taskText !== '') {
                        addTask(taskText);
                    }
                }
            });
        });
    </script>
</body>
</html>
