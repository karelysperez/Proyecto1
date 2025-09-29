import './style.css'
import './Task.js'

const taskBody = document.getElementById('taskBody');
const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskDescInput = document.getElementById('taskDescInput');

window.addEventListener('DOMContentLoaded', () => {
    const task = JSON.parse(localStorage.getItem('task')) || [];
    task.forEach((task) => {
        addRow(task.name, task.desc);
    });
});

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskName = taskNameInput.value;
  const taskDesc = taskDescInput.value;

  const task = JSON.parse(localStorage.getItem('task')) || [];

  task.push({ name: taskName, desc: taskDesc });

  localStorage.setItem('task', JSON.stringify(task));

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


