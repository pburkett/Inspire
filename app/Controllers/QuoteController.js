import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function _draw() {
    // TODO inject templates
    console.log(ProxyState.quote);
    document.getElementById("quote-body").innerText = ProxyState.quote.body
    document.getElementById("quote-author").innerText = ProxyState.quote.author
}
export default class QuoteController {

    constructor() {
        ProxyState.on("quote", _draw)
        this.getQuote()
    }
    getQuote() {
        try {
            quoteService.getQuote()
        } catch (e) {
            console.error(e)
        }
    }
}