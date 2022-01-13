const axios = require('axios');


const repos  = (name) => {
    return new Promise((resolve, reject) => {
      axios(`https://api.github.com/users/${name}/repos`)
        .then((response) => {
          if(response.status === 200 && response.statusText === 'OK') resolve(response);
        })
        .catch(error => reject('Błąd pobierania'));
    })
  }
  
  module.exports = {
    repos
  }