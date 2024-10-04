document.getElementById('task-progress').addEventListener('change', function() {
    const taskProgress = this.value;
    const reasonContainer = document.getElementById('reason-container');
  
    if (taskProgress === 'pending') {
      reasonContainer.style.display = 'block'; // Show reason textarea
    } else {
      reasonContainer.style.display = 'none'; // Hide reason textarea
      document.getElementById('reason').value = ''; // Clear the reason if Complete is selected
    }
  });
  
  document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way
  
    // Collect form data
    const userName = document.getElementById('user-name').value;
    const taskContent = document.getElementById('task-content').value;
    const taskDay = document.querySelector('input[name="task-day"]:checked').value;
    const nonWorkingDate = document.getElementById('non-working-date').value;
    const taskProgress = document.getElementById('task-progress').value;
    const reason = document.getElementById('reason').value;
  
    // Create a new task element
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
  
    // Add content to the task element
    let taskHTML = `
      <h3>${userName}'s Task</h3>
      <p><strong>Task:</strong> ${taskContent}</p>
      <p><strong>Day Type:</strong> ${taskDay === 'workday' ? 'Workday' : 'Non-Workday'}</p>
      <p><strong>Non-Working Date:</strong> ${nonWorkingDate}</p>
      <p><strong>Status:</strong> ${taskProgress}</p>
    `;
  
    if (taskProgress === 'pending' && reason) {
      taskHTML += `<p><strong>Reason for not completing:</strong> ${reason}</p>`;
    }
  
    taskHTML += `<button class="delete-btn">Delete</button>`;
  
    taskElement.innerHTML = taskHTML;
  
    // Add the task element to the tasks container
    document.getElementById('tasks-container').appendChild(taskElement);
  
    // Add event listener to the delete button
    taskElement.querySelector('.delete-btn').addEventListener('click', function() {
      taskElement.remove();
    });
  
    // Clear form inputs after submission
    document.getElementById('todo-form').reset();
    document.getElementById('reason-container').style.display = 'none'; // Hide reason container
  });
  document.getElementById('task-progress').addEventListener('change', function() {
    const taskProgress = this.value;
    const reasonContainer = document.getElementById('reason-container');
  
    if (taskProgress === 'pending') {
      reasonContainer.style.display = 'block'; // Show reason textarea
    } else {
      reasonContainer.style.display = 'none'; // Hide reason textarea
      document.getElementById('reason').value = ''; // Clear the reason if Complete is selected
    }
  });
  
  document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way
  
    // Collect form data
    const userName = document.getElementById('user-name').value;
    const taskContent = document.getElementById('task-content').value;
    const taskDay = document.querySelector('input[name="task-day"]:checked').value;
    const nonWorkingDate = document.getElementById('non-working-date').value;
    const taskProgress = document.getElementById('task-progress').value;
    const reason = document.getElementById('reason').value;
  
    // Create a new task element
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
  
    // Add content to the task element
    let taskHTML = `
      <h3>${userName}'s Task</h3>
      <p><strong>Task:</strong> ${taskContent}</p>
      <p><strong>Day Type:</strong> ${taskDay === 'workday' ? 'Workday' : 'Non-Workday'}</p>
      <p><strong>Non-Working Date:</strong> ${nonWorkingDate}</p>
      <p><strong>Status:</strong> ${taskProgress}</p>
    `;
  
    if (taskProgress === 'pending' && reason) {
      taskHTML += `<p><strong>Reason for not completing:</strong> ${reason}</p>`;
    }
  
    taskHTML += `<button class="delete-btn">Delete</button>`;
  
    taskElement.innerHTML = taskHTML;
  
    // Add the task element to the tasks container
    document.getElementById('tasks-container').appendChild(taskElement);
  
    // Add event listener to the delete button
    taskElement.querySelector('.delete-btn').addEventListener('click', function() {
      taskElement.remove();
    });
  
    // Clear form inputs after submission
    document.getElementById('todo-form').reset();
    document.getElementById('reason-container').style.display = 'none'; // Hide reason container
  });
    