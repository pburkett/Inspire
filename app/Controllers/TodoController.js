import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO template injection
function _drawTodos() { 
  console.log(ProxyState.todos);
}

export default class TodoController {
  constructor() {
    todoService.getTodos();
    ProxyState.on("todos", _drawTodos)
    
  }
  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo() {
    event.preventDefault();
    var form = window.event.target;
    var todo = {};
    todo['description'] = form.description.value
    todo['completed'] = false
    console.log(todo);
    try {
      todoService.addTodo(todo);
      
    } catch (error) {
      console.error(error)
    }
  }
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}