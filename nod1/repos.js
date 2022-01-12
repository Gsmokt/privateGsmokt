const axios = require('axios');


const repos  = (name) => {
    return new Promise((resolve, reject) => {
      axios(`https://api.github.com/users/${name}/repos`)
        .then((response) => {
          resolve(response)
        })
        .catch(error => reject('Błąd pobierania'))
    })
  }
  
  module.exports = {
    repos
  }