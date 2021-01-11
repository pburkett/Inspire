export default class Quote {
    constructor({ author, body, error }) {
        this.author = author
        this.body = body || error
        this.link = `https://en.wikipedia.org/wiki/${author.split(' ').join('_')}`
    }
}