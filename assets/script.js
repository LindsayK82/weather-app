var userInputEl = document.querySelector('#user-input');
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

function getApiCin() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=84.5120&lon=39.1031&appid=e0d7ec84dc06ed39177d5536248ed264';

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
     
    });
} console.log(getApiCin);

function getApiCol() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=82.998&lon=39.9612&appid=e0d7ec84dc06ed39177d5536248ed264';

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
     
    }); 
} console.log(getApiCol);

function getApiAkron() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=81.5190&lon=41.0814&appid=e0d7ec84dc06ed39177d5536248ed264';

    fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
     
    }); 
} console.log(getApiAkron);

formSubmitHandler();
buttonClick();
displayForecasts();
getApiCin();
getApiCol();
getApiAkron();
