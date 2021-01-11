import { ProxyState } from "../AppState.js";

function _draw() {
    console.log(ProxyState.time);
    document.getElementById("clock").innerText = ProxyState.time
}

export default class ClockController {

    constructor() {

        this.clockTick()
        ProxyState.on("time", _draw)
    }
    clockTick() {
        setInterval(() => {
            this.getTime()
        }, 1200);
    }
    getTime() {
        let x = new Date()
        ProxyState.time = `${x.getHours()}:${x.getMinutes()}`
    }

}