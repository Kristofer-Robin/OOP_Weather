class Weather{
    constructor(city) {
        this.city = city
        this.key = '94da08fb639a1f05110ab103743a281b'
    }


    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }
}