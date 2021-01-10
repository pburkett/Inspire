import { ProxyState } from "../AppState.js";

function _draw() {
    console.log(ProxyState.time);
    document.getElementById("clock").innerText = ProxyState.time
}

export default class ClockController {

    constructor() {
        let x = new Date()
        console.log(`${x.getHours()}:${x.getMinutes()}`);
        ProxyState.time = `${x.getHours()}:${x.getMinutes()}`
        ProxyState.on("time", _draw())
    }

}