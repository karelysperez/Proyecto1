const deleteTaskBtn = document.getElementById('deleteTaskBtn');
const taskBody = document.getElementById('taskBody');

deleteTaskBtn.addEventListener('click', () => {

  const checkboxes = document.querySelectorAll('.taskCheckBox');

  checkboxes.forEach((checkbox) => {
    
    if (checkbox.checked) {

      const row = checkbox.closest('tr');
      
      row.remove();
      
    }
  });
});

function updateDeleteButtonState() {

  const checkboxes = document.querySelectorAll('.taskCheckBox');
  let anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  
  if (anyChecked) {
    deleteTaskBtn.classList.add('active');
    deleteTaskBtn.disabled = false;
  } else {
    deleteTaskBtn.disabled = true;
    deleteTaskBtn.classList.remove('active');
  }
}

taskBody.addEventListener('change', (event) => {

  if (event.target.classList.contains('taskCheckBox')) {
    updateDeleteButtonState();
  }
});