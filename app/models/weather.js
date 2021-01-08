export default class Weather {
    constructor(data) {
        console.log('[RAW WEATHER API DATA]', data)
        this.city = data.name
        this.kelvin = data.main.temp
        this.description = data.weather[0].description
        this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }
    getCelsius() {
        return Math.round(this.kelvin - 273.15)
    }
    getFarenheit() {
        return Math.round(this.getCelsius() * 9 / 5 + 32)
    }

    get Template() {
        return `<div class="col-2">
        <img id="weather-icon" class="mt-2 ml-5 drop-shadow-lg" src="${this.icon}" alt="">
    </div>
    <div class="col-9">
        <div id="weather-descrip" class="text-center text-white">${this.description}</div>
        <div id="weather-location" class="text-center text-white">${this.getFarenheit()}</div>
    </div>`


    }
}