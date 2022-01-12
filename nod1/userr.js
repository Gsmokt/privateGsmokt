const fs = require('fs');
const axios = require('axios');

const user  = (name) => {
  return new Promise((resolve, reject) => {
    axios( `https://api.github.com/users/${name}`)
      .then((response) => {
        resolve(response)
      })
      .catch(error => reject('Błąd pobierania'))
  })
}

module.exports = {
  user
}