
const request = require('request');




function getUser(userId){
    return new Promise((resolve,reject) => {
      const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
        request(urlUser, (error, response, body) => {
      if (!error && response.statusCode === 200) {
          const user = JSON.parse(body);
          resolve(user)
        } else {
          reject('User not found');
      }
    });
    })
}
  
  module.exports = {
      getUser
  }