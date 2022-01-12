const fs = require('fs');
const axios = require('axios');


const api = (name,followers) => {
    axios.get( `https://api.github.com/users/${name}`)
    .then(response => {
            if(followers !== undefined || null){
                const obj ={Username: response.data.name, Followers: response.data.followers, Repos: response.data.public_repos};
                for(const [key,value] of Object.entries(obj)){
                    console.log(`${key}: ${value}`)
                }
            }else{
                const obj ={Username: response.data.name,Repos: response.data.public_repos};
                for(const [key,value] of Object.entries(obj)){
                    console.log(`${key}: ${value}`)
            }
        }return response})
        .then(response => {
            axios(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=${response.data.location}`)
                .then(response => console.log(`Weather: ${response.data.weather[0].main}, ${response.data.weather[0].description}`))
                .catch(error => console.log(error.name + ': ' + error.message))
        })
        .then(()=> {
            axios(`https://api.github.com/users/${name}/repos`)
                .then(response => {
                    const repos = response.data.map(e => e.name)
                    console.log('Repos name:',repos)
                })
                .catch(error => console.log(error.name + ': ' + error.message))
        })
        .catch(error => console.log(error.name + ': ' + error.message))
      
}
module.exports = {
    api
}


