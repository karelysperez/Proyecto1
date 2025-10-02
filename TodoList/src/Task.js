import { getTasks, saveTasks } from "./Storage";

const deleteTaskBtn = document.getElementById('deleteTaskBtn');
const addTaskBtn = document.getElementById('addTaskBtn');
const completeBtn = document.getElementById('completeBtn');
const incompleteBtn = document.getElementById('incompleteBtn');
const taskBody = document.getElementById('taskBody');
const taskForm = document.getElementById('taskForm');
const buttonsDiv = document.getElementById('buttonsDiv');


addTaskBtn.addEventListener('click', () => {
  
  if (taskForm.style.display === 'none') {
    taskForm.style.display = '';
  } else {
    taskForm.style.display = 'none';
  }
});

completeBtn.addEventListener('click', () => {

  const checkboxes = document.querySelectorAll('.taskCheckBox');
  let tasks = getTasks();

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          const row = checkbox.closest('tr');
          const taskName = row.cells[0].textContent;
          
          const task = tasks.find(t => t.name === taskName);
          if (task) task.status = 'completed';
          row.classList.add('taskCompleted');
          row.classList.remove('taskIncomplete');
        }
    });
    saveTasks(tasks);
});

incompleteBtn.addEventListener('click', () => {
    
  const checkboxes = document.querySelectorAll('.taskCheckBox');
  let tasks = getTasks();

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          const row = checkbox.closest('tr');
          const taskName = row.cells[0].textContent;

          const task = tasks.find(t => t.name === taskName);
          if (task) task.status = 'incomplete';
          
          row.classList.add('taskIncomplete');
          row.classList.remove('taskCompleted');

        }
    });
    saveTasks(tasks);
});


deleteTaskBtn.addEventListener('click', () => {

  const checkboxes = document.querySelectorAll('.taskCheckBox');

  let tasks = getTasks();

  checkboxes.forEach((checkbox) => {
    
    if (checkbox.checked) {

      const row = checkbox.closest('tr');

      const taskName = row.cells[0].textContent;

      tasks = tasks.filter(task => task.name !== taskName);
      
      row.remove();
      
    }
  });

  saveTasks(tasks);
});

function updateButtonState() {

  const checkboxes = document.querySelectorAll('.taskCheckBox');
  const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

  const buttons = [
    {btn: deleteTaskBtn, className: 'active'},
    {btn: completeBtn, className: 'completed'},
    {btn: incompleteBtn, className: 'incomplete'}
  ]

  buttons.forEach(({btn, className}) => {
    if (anyChecked) {
      btn.classList.add(className);
    } else {
      btn.classList.remove(className);
    }
  });

  buttonsDiv.disabled = !anyChecked;
}

taskBody.addEventListener('change', (event) => {

  if (event.target.classList.contains('taskCheckBox')) {
    updateButtonState();
  }
});

