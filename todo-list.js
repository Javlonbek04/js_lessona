let todoList = [];

function AddTodo(){
  const todoName = document.querySelector('.js-name-input');
  const todoDate = document.querySelector('.js-date-input');

  todoName.value && todoList.push({
    'name': todoName.value,
    'date': todoDate.value
  });

  todoDate.value = '';
  todoName.value = '';

  renderTodoList();
}

function renderTodoList() {
  let renderHTML = '';

  for(let i = 0; i < todoList.length; i++){
    renderHTML += `
      <div>
        ${todoList[i]['name']}
      </div>
      <div>
        ${todoList[i]['date']}
      </div>
      <button class="delete-todo-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      "> Delete </button>
    `;
  }

  document.querySelector('.js-render-todo').innerHTML = renderHTML;
}