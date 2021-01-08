import { api } from "./AxiosService.js";
import { ProxyState } from "../AppState.js"
import Image from "../models/Image.js"


//TODO create methods to retrieve data and save to the State
class ImageService {
    async getImage() {
        let res = await api.get('images')
        ProxyState.image = new Image(res.data)
        console.log(res.data);
    }
}
const imageService = new ImageService();
export default imageService;