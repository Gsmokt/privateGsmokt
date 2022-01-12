const fs = require('fs');
const {weather} = require('./weather');
const {repos} = require('./repos');
const {user} = require('./userr');

const api = (name,followers) => {
  user(name)
    .then((response1) => {
        weather(response1)
         .then((response2) => {
            repos(name)
             .then((response3) => {

                if(followers !== undefined || null){
                    const obj ={Username: response1.data.name, Followers: response1.data.followers, Repos: response1.data.public_repos};
                    for(const [key,value] of Object.entries(obj)){
                        console.log(`${key}: ${value}`)
                    }
                }else{
                    const obj ={Username: response1.data.name,Repos: response1.data.public_repos};
                    for(const [key,value] of Object.entries(obj)){
                        console.log(`${key}: ${value}`)
                }
            }
            console.log(`Weather: ${response2.data.weather[0].main}, ${response2.data.weather[0].description}`)
            const repos = response3.data.map(e => e.name)
                    console.log('Repos name:',repos)

             })
        })
    })
    .catch(error => console.log(`${error.name} : ${error.message}`));   
}

module.exports = {
    api
}