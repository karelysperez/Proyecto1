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

  checkboxes.forEach((checkbox) => {
    
    if (checkbox.checked) {

      const row = checkbox.closest('tr');
      row.classList.add('taskCompleted');
      
    }
  });
});

incompleteBtn.addEventListener('click', () => {
    
  const checkboxes = document.querySelectorAll('.taskCheckBox');

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const row = checkbox.closest('tr');
            row.classList.add('taskIncomplete');
        }
    });
});


deleteTaskBtn.addEventListener('click', () => {

  const checkboxes = document.querySelectorAll('.taskCheckBox');

  checkboxes.forEach((checkbox) => {
    
    if (checkbox.checked) {

      const row = checkbox.closest('tr');
      
      row.remove();
      
    }
  });
});

function updateButtonState() {

  const checkboxes = document.querySelectorAll('.taskCheckBox');
  let anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  
  if (anyChecked) {
    deleteTaskBtn.classList.add('active');
    completeBtn.classList.add('completed');
    incompleteBtn.classList.add('incomplete');

    buttonsDiv.disabled = false;

  } else {
    buttonsDiv.disabled = true;

    deleteTaskBtn.classList.remove('active');
    completeBtn.classList.remove('completed');
    incompleteBtn.classList.remove('incomplete');
  }
}

taskBody.addEventListener('change', (event) => {

  if (event.target.classList.contains('taskCheckBox')) {
    updateButtonState();
  }
});

