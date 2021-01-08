import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../models/Todo.js"


let url = 'parker/todos/'


class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    ProxyState.todos = res.data.map(t => new Todo(t))
    
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }

  async toggleTodoStatus(todoId) {
    let todo = ProxyState.todos.find(t => t._id == todoId);
    console.log(todo);
  //TODO test below code \/
    if (todo){
      await api.put(todoId, {
        completed: !todo.completed
      })
    }

    
    console.log(todo);
    ProxyState.todos = ProxyState.todos
  }

  async removeTodo(todoId) {
    let res = await api.delete(url + todoId)
    console.log(res);
    if (res.status == 200) {
      ProxyState.todos = ProxyState.todos.filter(t => t._id != todoId)

    } else {console.error('todo removal failed')}
    console.log(ProxyState.todos);
  }
}

const todoService = new TodoService();
export default todoService;