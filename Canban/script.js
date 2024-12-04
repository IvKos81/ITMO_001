document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-text');
    const createTaskBtn = document.getElementById('create-task-btn');
    const saveBoardBtn = document.getElementById('save-board');
    const loadBoardBtn = document.getElementById('load-board');
    const columns = document.querySelectorAll('.canban-col');
  
    
    function createNewTask(text) {
      const taskCard = document.createElement('div');
      taskCard.className = 'task-card';
      taskCard.draggable = true; 

      
      const closeButton = document.createElement('span');
      closeButton.className = 'close-button';
      closeButton.textContent = '×';
      closeButton.addEventListener('click', (event) => {
        event.stopPropagation(); 
        taskCard.remove();
      });

    
      taskCard.innerHTML = `
        <p class="task-text">${text}</p>
      `;

     
      taskCard.appendChild(closeButton);

      
      taskCard.addEventListener('dragstart', (event) => {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', taskCard.querySelector('.task-text').textContent);
        event.target.classList.add('dragging'); 
      });

      taskCard.addEventListener('dragend', (event) => {
        event.target.classList.remove('dragging'); 
      });

      return taskCard;
    }

   
    createTaskBtn.addEventListener('click', () => {
      if (!taskInput.value.trim()) return;

      const newTask = createNewTask(taskInput.value);
      document.getElementById('col-new-task').appendChild(newTask);
      taskInput.value = ''; 
    });

    
    columns.forEach(column => {
      column.addEventListener('dragover', (event) => {
        event.preventDefault(); 
        event.dataTransfer.dropEffect = 'move'; 
      });

      column.addEventListener('drop', (event) => {
        event.preventDefault();
        const taskText = event.dataTransfer.getData('text/plain');

       
        let currentTask = null;
        columns.forEach(col => {
          const tasks = col.querySelectorAll('.task-card');
          tasks.forEach(task => {
            if (task.querySelector('.task-text')?.textContent === taskText) { 
              currentTask = task;
            }
          });
        });

        
        if (currentTask && currentTask.parentElement) {
          currentTask.parentElement.removeChild(currentTask);
        }


        const newTask = createNewTask(taskText);
        column.appendChild(newTask);
      });
    });

    
    function saveBoardToLocalStorage() {
      const boardState = {};
      columns.forEach((column, index) => {
        const columnTasks = [];
        column.querySelectorAll('.task-card').forEach(task => {
          columnTasks.push(task.querySelector('.task-text').textContent);
        });
        boardState[column.id] = columnTasks;
      });
      localStorage.setItem('kanbanBoard', JSON.stringify(boardState));
    }

    
    function loadBoardFromLocalStorage() {
      const savedBoard = localStorage.getItem('kanbanBoard');
      if (savedBoard) {
        const boardState = JSON.parse(savedBoard);
        columns.forEach(column => {
          while (column.firstChild) {
            column.removeChild(column.firstChild);
          }
          const columnId = column.id;
          if (boardState[columnId]) {
            boardState[columnId].forEach(taskText => {
              const newTask = createNewTask(taskText);
              column.appendChild(newTask);
            });
          }
        });
      } else {
        alert("Нет сохраненной информации.");
      }
    }

    
    saveBoardBtn.addEventListener('click', () => {
      saveBoardToLocalStorage();
      alert("Доска успешно сохранена!");
    });

    
    loadBoardBtn.addEventListener('click', () => {
      loadBoardFromLocalStorage();
    });
});
