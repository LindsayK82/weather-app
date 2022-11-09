var userInputEl = document.querySelector('#user-input');
var submitButton = document.querySelector('#weather');
var searchCity = document.querySelector('#loc-id');
var forecastContainerEl = document.querySelector('#forecast-container');
var apiKey = 'e0d7ec84dc06ed39177d5536248ed264'
var latCodesCol = '82.998';
var lonCodesCol = '39.9612';
var latCodesAkron = '81.5190';
var lonCodesAkron = '41.0814';

var formSubmitHandler = function (event) {

    var cityname = userInputEl.value;

    if (cityname) {
        getWeatherData(cityname);

        forecastContainerEl.textContent = '';
        userInputEl.value = '';
    }
}; console.log(formSubmitHandler);

var buttonClick = function (event) {
    forecastContainerEl.addEventListener('userInput', formSubmitHandler);
}

var displayForecasts = function (userInput, forecastContainerEl) {
  if (userInput === 0) {
      forecastContainerEl.textContent = 'No city selected.';
      return;
  } else (userInput === '');

}; console.log(displayForecasts);

function getLocation(city) {
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+ city +'&appid='+ apiKey;

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      var lat = data[0].lat;
      var lon = data[0].lon;
     getCurrent(lat, lon);
     getForecast(lat, lon);
    });
}

function getCurrent(lat, lon) {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon + '&units=imperial&appid='+ apiKey;

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    
      displayCurrentWeather(data);
     
    }); 
}

function getForecast(lat, lon) {
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='+ lat +'&lon='+ lon + '&units=imperial&appid='+ apiKey;

  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  
    displayForecast(data.list);
   
  }); 
}

function displayForecast(weatherData) {
    for(var i=0; i < weatherData.length; i+=8) {
      var weatherCard = document.createElement("div")
      var date = document.createElement('h3')
      var icon = document.createElement('img')


      date.textContent = weatherData[i].dt_txt.split(' ')[0]
      icon.setAttribute('src', 'http://openweathermap.org/img/wn/'+weatherData[i].weather[0].icon + '@2x.png')
      weatherCard.append(date, icon)
      forecastContainerEl.append(weatherCard)
    }
     
  
}  

function displayCurrentWeather(weatherData) {
    
     
  
}  

// formSubmitHandler();
// buttonClick();
// displayForecasts();
// getApiCin();
// getApiCol();
// getApiAkron();

submitButton.addEventListener("click", function (event){
  event.preventDefault();
    var city = searchCity.value;
    getLocation(city)
})