const apiWeatherKey = '18b2c134663c7934710a3a2395060e62';

function getWeather() {
    const City = document.getElementById('City').value;

    if (City) {
        const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiWeatherKey}&units=metric&lang=id`;

        fetch(urlAPI)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    } else {
        alert('Please enter a city name.');
    }
}

function displayWeather(data) {
    const cityName = document.getElementById('cityName');;
    const temperature = document.getElementById('temperature');
    const iconConditions = document.getElementById('iconConditions');
    const conditions = document.getElementById('conditions');
    const windSpeed = document.getElementById('windSpeed');

    const errorMsg = document.querySelectorAll('#errorMsg');
    const weatherData = document.querySelectorAll('.detail-weather');
    if (data.name) {
        errorMsg.forEach(element =>{
            element.style.display = 'none';
        });
        
        //city name
        cityName.innerHTML = data.name;

        //temperature
        temperature.innerHTML = data.main.temp.toString();

        
        //desc conditions
        conditions.innerHTML = data.weather[0].description;

        //icon conditions
        const iconCon = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCon}.png`;
        iconConditions.src   = iconUrl;

        //wind speed
        windSpeed.innerHTML = data.wind.speed;

        weatherData.forEach(element =>{
            element.style.display = 'block';
        });
    }else{
        errorMsg.forEach(element =>{
            element.style.display = 'block';
        });

        weatherData.forEach(element =>{
            element.style.display = 'none';
        });
    }

}
