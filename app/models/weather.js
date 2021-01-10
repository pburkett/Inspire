export default class Weather {
    constructor(data) {
        console.log('[RAW WEATHER API DATA]', data)
        this.city = data.name
        this.kelvin = data.main.temp
        this.displayCelsius = false
        this.description = data.weather[0].description
        this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }
    getCelsius() {
        let out = Math.round(this.kelvin - 273.15)
        out += ' C'
        return out
    }
    getFarenheit() {
        let out = Math.round((this.kelvin - 273.15) * 9 / 5 + 32)
        out += ' F'
        return out
    }

    get Template() {
        return `<div class="col-3">
        <img id="weather-icon" class="mt-2 drop-shadow-lg m-auto d-flex" src="${this.icon}" alt="">
    </div>
    <div class="col-6">
        <div id="weather-descrip" class="text-center text-white">${this.description}</div>
        <div onclick="app.weatherController.changeUnit()" id="weather-location" class="cursor-pointer text-center text-white">${this.displayCelsius ? this.getCelsius() : this.getFarenheit()}</div>
    </div>`


    }
}