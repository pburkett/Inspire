import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function _draw() {
    // TODO inject templates
    console.log(ProxyState.quote);
    document.getElementById("quote-body").innerText = ProxyState.quote.body
    document.getElementById("quote-author").innerText = ProxyState.quote.author

    document.getElementById("quote-div").href = ProxyState.quote.link

}


$("#quote-div").mouseover(
    function() {
        $("#quote-body").addClass("slide-up")
        $("#quote-author").addClass("slide-down")
        $("#quote-author").removeClass("opacity-0")

        $("#quote-body").removeClass("slide-up-reverse")
        $("#quote-author").removeClass("slide-down-reverse")
    })




$("#quote-div").mouseleave(
    function() {
        $("#quote-body").addClass("slide-up-reverse")
        $("#quote-author").addClass("slide-down-reverse")
        $("#quote-body").removeClass("slide-up")
        $("#quote-author").removeClass("slide-down")


    })



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