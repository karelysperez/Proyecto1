import './style.css'
import './Task.js'
import { getTasks, saveTasks } from './Storage.js';

const taskBody = document.getElementById('taskBody');
const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskDescInput = document.getElementById('taskDescInput');

window.addEventListener('DOMContentLoaded', () => {

  const tasks = getTasks();

    tasks.forEach((task) => {
        addRow(task.name, task.desc);
    });
});

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskName = taskNameInput.value;
  const taskDesc = taskDescInput.value;

  const newTask = { 
    name: taskName, 
    desc: taskDesc,
    status: null
  };

  const tasks = getTasks();

  tasks.push(newTask);
  saveTasks(tasks);

  addRow(taskName, taskDesc);

  taskForm.reset();
  taskNameInput.focus();
});

function addRow(taskName, taskDesc, status) {

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${taskName}</td>
    <td>${taskDesc}</td>
    <td><input type="checkbox" class="taskCheckBox"></td>
  `;

  if (status === 'completed') {
    row.classList.add('taskCompleted');
  } else if (status === 'incomplete') {
    row.classList.add('taskIncomplete');
  }

  taskBody.appendChild(row);
}


