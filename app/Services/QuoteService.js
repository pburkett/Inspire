import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import { api } from "../Services/AxiosService.js"

class QuoteService {

    async getQuote() {
        let res = await api.get('quotes')
        console.log(res.data.quote);
        ProxyState.quote = new Quote(res.data.quote)
    }
}

const quoteService = new QuoteService();
export default quoteService;