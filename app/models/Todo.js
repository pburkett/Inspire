export default class Todo {
    constructor({ _id, completed, description }) {
        this._id = _id || console.log('todo ID NOT FOUND')
        this.completed = completed
        this.description = description
    }

    get Template() {

        return `<div class="row pl-3">
        <input onclick="app.todoController.toggleTodoStatus('${this._id}')" class="todo-checkbox" ${this.completed ? 'checked':'unchecked' } type="checkbox"></input>
        <label class="gray-underline todo-item ml-3 text-purple">${this.description}</label>
        <div class="col">
            <div class="row justify-content-end">
                <button onclick="app.todoController.removeTodo('${this._id}')" class="todo-delete">X</button>
            </div>
        </div>
    </div>
`
    }
}