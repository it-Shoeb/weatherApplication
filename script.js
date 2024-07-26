
const APIKEY = "05144f34feb4e6e931c327f876a5d485"

let place = document.getElementById('getPlace')
let weatherImage = document.querySelector('.image')
let tempreture = document.querySelector('.tempreture')
let cityName = document.querySelector('.city-name')
let currentDay = document.querySelector('.current-day')
let currentMonth = document.querySelector('.month')
let currentDate = document.querySelector('.date')
let description = document.querySelector('.description')
let getplace = "";

getDay()
getMonth()

currentDate.textContent = new Date().getDate()

function getMonth() {
    let monthIndex = new Date().getMonth()

    switch (monthIndex) {
        case 0:
            currentMonth.textContent = "January"
            break;
        case 1:
            currentMonth.textContent = "February"
            break;
        case 2:
            currentMonth.textContent = "March"
            break;
        case 3:
            currentMonth.textContent = "April"
            break;
        case 4:
            currentMonth.textContent = "May"
            break;
        case 5:
            currentMonth.textContent = "June"
            break;
        case 6:
            currentMonth.textContent = "July"
            break;
        case 7:
            currentMonth.textContent = "August"
            break;
        case 8:
            currentMonth.textContent = "September"
            break;
        case 9:
            currentMonth.textContent = "Octber"
            break;
        case 10:
            currentMonth.textContent = "November"
            break;
        case 11:
            currentMonth.textContent = "December"
            break;
    }
}

function getDay() {
    let dayIndex = new Date().getDay()
    switch (dayIndex) {
        case 1:
            currentDay.textContent = "Monday"
            break;
        case 2:
            currentDay.textContent = "Tuesday"
            break;
        case 3:
            currentDay.textContent = "Wednesday"
            break;
        case 4:
            currentDay.textContent = "Thursday"
            break;
        case 5:
            currentDay.textContent = "Friday"
            break;
        case 6:
            currentDay.textContent = "Saturday"
            break;
        case 7:
            currentDay.textContent = "Sunday"
            break;
    }
}

function setCloud(data) {
    console.log(data);
    switch (data) {
        case "Mist":
            weatherImage.src = "./assets/mist.png"
            break;
        case "Clouds":
            weatherImage.src = "./assets/cloudy.png"
            break;
        case "Rain":
            weatherImage.src = "./assets/rain.png"
            break;
        case "Clear":
            weatherImage.src = "./assets/sun.png"
            break;
        case "Haze":
            weatherImage.src = "./assets/foggy.png"
            break;
        case "city not found":
            weatherImage.src = "./assets/not found.png"
            break;
        default:
            weatherImage.src = "./assets/not found.png"
    }
}

place.addEventListener('keypress', (e) => {
    if (e.code == "Enter" || e.code == "Space") {
        getplace = place.value
        console.log(getplace);
        getAPI(getplace)
    }
})

let feels_like = document.querySelector('.feels_like')
let Wind = document.querySelector('.Wind')
let humidity = document.querySelector('.humidity')
let pressure = document.querySelector('.pressure')
let fehranite_description = document.querySelector('.fehranite_description')
let fehranite = document.querySelector('.fehranite')

async function getAPI(place) {
    let blob = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIKEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            if (data.message == "city not found") {
                cityName.textContent = "city not found"
                tempreture.textContent = "00"
                description.textContent = "......."
                setCloud("city not found")
            } else {
                console.log(data);
                cityName.textContent = data.name + ", " + data.sys.country
                description.textContent = data.weather[0].description
                tempreture.textContent = parseInt(data.main.temp - 273.15) + '°'
                
                setCloud(data.weather[0].main)
                
                feels_like.textContent = data.main.feels_like;
                Wind.textContent = data.wind.speed + " km/h";
                humidity.textContent = data.main.humidity + ' %';
                pressure.textContent = data.main.pressure;
                fehranite_description.textContent = data.weather[0].description
                tempreture.textContent = parseInt(data.main.temp - 273.15) + '°'
                fehranite.textContent = parseInt((data.main.temp - 273.15)* (9/5) + 32);
            }
            console.log(data.main.temp - 273.15);
            console.log(data.main.temp * (9/5) + 32);
            // change to fehranite
        })

}

console.log(weatherImage);
console.log(tempreture);



