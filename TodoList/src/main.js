import './style.css'
import './form.js'
import './deleteTask.js'

const taskBody = document.getElementById('taskBody');
const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskDescInput = document.getElementById('taskDescInput');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskName = taskNameInput.value;
  const taskDesc = taskDescInput.value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${taskName}</td>
    <td>${taskDesc}</td>
    <td><input type="checkbox" class="taskCheckbox"></td>
  `;

    taskBody.appendChild(row);

    taskNameInput.value = '';
    taskDescInput.value = '';
    taskNameInput.focus();
});


