const request = require('request')

function getWeather(user){
    return new Promise((resolve,reject) => {
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${user.address.geo.lat}&lon=${user.address.geo.lng}`;
          request(urlWeather, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const weather = JSON.parse(body);
            resolve(weather)
          } else {
            reject('Weather not found');
        }
      });
      })

}

module.exports = {
    getWeather
}   
