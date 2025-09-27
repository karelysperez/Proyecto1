const addTaskBtn = document.getElementById('addTaskBtn');
const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskName');
const taskDescInput = document.getElementById('taskDesc');

addTaskBtn.addEventListener('click', () => {
  if (taskForm.style.display === 'none') {
    taskForm.style.display = 'block';
    }
});

