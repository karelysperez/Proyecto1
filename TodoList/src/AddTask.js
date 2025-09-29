const addTaskBtn = document.getElementById('addTaskBtn');
const taskForm = document.getElementById('taskForm');


addTaskBtn.addEventListener('click', () => {
  
  if (taskForm.style.display === 'none') {
    taskForm.style.display = '';
  } else {
    taskForm.style.display = 'none';
  }
});

