const deleteTaskBtn = document.getElementById('deleteTaskBtn');
const taskBody = document.getElementById('taskBody');

deleteTaskBtn.addEventListener('click', () => {

  const checkboxes = document.querySelectorAll('.taskCheckbox');

  checkboxes.forEach((checkbox) => {
    
    if (checkbox.checked) {
        
      const row = checkbox.closest('tr');
      if (row) {
        taskBody.removeChild(row);
      }
    }
  });
});