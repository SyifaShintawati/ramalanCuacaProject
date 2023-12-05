const apiWeatherKey = '18b2c134663c7934710a3a2395060e62';

function getWeather() {
    const City = document.getElementById('City').value;

    if (City) {
        const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiWeatherKey}&units=metric`;

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
    const conditionTranslations = {
        'clear sky': 'cerah',
        'few clouds': 'sedikit awan',
        'scattered clouds': 'awan berkeping-keping',
        'broken clouds': 'awan hancur',
        'overcast clouds': 'awan mendung',
        'shower rain': 'hujan deras',
        'rain': 'hujan',
        'thunderstorm': 'badai petir',
        'snow': 'salju',
        'mist': 'kabut',
      };
      
      function translateConditionToIndonesian(englishCondition) {
        return conditionTranslations[englishCondition.toLowerCase()] || englishCondition;
      }
    
    const cityName = document.getElementById('cityName');;
    const temperature = document.getElementById('temperature');
    const conditions = document.getElementById('conditions');
    const windSpeed = document.getElementById('windSpeed');

    (data.name) ? cityName.innerHTML = data.name : cityName.innerHTML = '0';
    (data.main.temp) ? temperature.innerHTML = data.main.temp : temperature.innerHTML = '0';
    const englishCondition = (data.weather[0].description) ? conditions.innerHTML = data.weather[0].description : conditions.innerHTML = '0';
    const indonesianCondition = translateConditionToIndonesian(englishCondition);
    conditions.innerHTML = indonesianCondition;
    (data.wind.speed) ? windSpeed.innerHTML = data.wind.speed : windSpeed.innerHTML = '0';
    
}
