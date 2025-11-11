

    function loadTodo() {
      const todoList = document.getElementById('todoList');
      todoList.innerHTML = '';
      const todos = JSON.parse(localStorage.getItem('todos')) || [];

      todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;

        const del = document.createElement('button');
        del.textContent = 'Delete';
        del.className = 'delete-btn';
        del.onclick = () => deleteTodo(index);

        li.appendChild(del);
        todoList.appendChild(li);
      });
    }

    function addTodo() {
      const input = document.getElementById('todoInput');
      const value = input.value.trim();
      if (!value) return;

      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      todos.push(value);
      localStorage.setItem('todos', JSON.stringify(todos));

      input.value = '';
      loadTodo();
    }


    function deleteTodo(index) {
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
      loadTodo();
    }


    document.getElementById('addBtn').addEventListener('click', addTodo);
    document.getElementById('todoInput').addEventListener('keypress', e => {
      if (e.key === 'Enter') addTodo();
    });

    window.addEventListener('load', loadTodo);