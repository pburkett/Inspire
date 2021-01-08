export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data)
    this.city = data.name
    this.kelvin = data.main.temp
    this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }
  getCelsius(){
    return Math.round(this.kelvin - 273.15)
  }
  getFarenheit(){
    return Math.round(this.getCelsius() * 9/5 + 32)
  }

  get Template(){
    return `
    `
  }
}