const axios = require('axios');

const user  = (name) => {
  return new Promise((resolve, reject) => {
    axios( `https://api.github.com/users/${name}`)
      .then((response) => {
        if(response.status === 200 && response.statusText === 'OK') resolve(response);
      })
      .catch(error => reject('Błąd pobierania'));
  })
}

module.exports = {
  user
}