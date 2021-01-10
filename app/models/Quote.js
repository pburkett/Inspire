export default class Quote {
    constructor({ author, body, error }) {
        this.author = author
        this.body = body || error

    }
}