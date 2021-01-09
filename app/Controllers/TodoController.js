import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO template injection
function _drawTodos() {
    console.log(ProxyState.todos);
    let template = ''
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById("todo-div").innerHTML = template
}

function _drawTodocount() {
    document.getElementById("completed-count").innerText = ProxyState.taskCompletionCount
}

export default class TodoController {
    constructor() {
        todoService.getTodos();
        ProxyState.on("todos", _drawTodos)
        ProxyState.on("taskCompletionCount", _drawTodocount)
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
        form.reset()
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