import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"

function _draw() {
    //TODO inject url
    console.log(ProxyState.image);
    document.getElementById("app").style.backgroundImage = `url(${ProxyState.image.url})`
}
export default class ImageController {

    constructor() {
        ProxyState.on("image", _draw)
        this.getImage()
    }

    getImage() {
        try {
            imageService.getImage()
        } catch (e) {
            console.error(e)
        }
    }
}