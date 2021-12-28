let fs = require('fs');
const axios = require('axios');
axios(' https://api.github.com/users/octocat')
.then(response =>{ 
    const loc = response.data.lacation
    console.log(response.data.name, response.data.followers, response.data.public_repos)
})
.then(() => {

    axios(' https://api.github.com/users/octocat/repos')
    .then((response) => {
        console.log(response.data.map(e => e.name))
    })
})

axios('https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=Siemiatycze')
.then((res) => {
  console.log(res.data.weather[0].main,res.data.weather[0].description)
})