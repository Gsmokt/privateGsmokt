const axios = require('axios');

const weather  = (response) => {
    return new Promise((resolve, reject) => {
      axios(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=${response.data.location}`)
        .then((response) => {
          if(response.status === 200 && response.statusText === 'OK') resolve(response);
        })
        .catch(error => reject(`Błąd pobierania: ${error.response.status}`));
    })
  }
  
  module.exports = {
    weather
  }