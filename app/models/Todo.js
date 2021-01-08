export default class Todo {
    constructor({ _id, completed, description }) {
        this._id = _id || console.log('todo ID NOT FOUND')
        this.completed = completed
        this.description = description
    }

    get Template() {
        //TODO create todo template
        return ``
    }
}