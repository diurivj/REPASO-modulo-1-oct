var container = document.getElementById('container');
var todo      = document.getElementById('todo');
var submit    = document.getElementById('submit');
var list      = document.getElementById('todo-list');

submit.addEventListener('click', function(e) {
  e.preventDefault();
  var value = todo.value; // getter
  var nuevotodo = document.createElement('li'); // aqui estoy creando un elemento de tipo li
  nuevotodo.innerHTML = value;
  list.appendChild(nuevotodo);
  todo.placeholder = 'Agrege otro'
  todo.value = '';
});

list.addEventListener('click', function(e) {
  list.removeChild(e.target);
});