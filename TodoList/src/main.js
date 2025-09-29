import './style.css'
import './Task.js'

const taskBody = document.getElementById('taskBody');
const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskDescInput = document.getElementById('taskDescInput');

window.addEventListener('DOMContentLoaded', () => {

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    tasks.forEach((task) => {
        addRow(task.name, task.desc);
    });
});

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskName = taskNameInput.value;
  const taskDesc = taskDescInput.value;

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.push({ name: taskName, desc: taskDesc });

  localStorage.setItem('tasks', JSON.stringify(tasks));

  addRow(taskName, taskDesc);

  taskNameInput.value = '';
  taskDescInput.value = '';
  taskNameInput.focus();
});

function addRow(taskName, taskDesc) {

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${taskName}</td>
    <td>${taskDesc}</td>
    <td><input type="checkbox" class="taskCheckBox"></td>
  `;

  taskBody.appendChild(row);
}


