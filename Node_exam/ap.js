let colors = require('colors');
let fs = require('fs')
const axios = require('axios')
const data = require('./data.json')
const request = require('request')
const yargs = require('yargs')
const {argv} = require('yargs')
const weather = require('openweather-apis')
const parameters = yargs.argv;
let a = parameters.a;
let b = parameters.b;



axios(' https://api.github.com/users/octocat')
.then(response =>{ 
    const loc = response.data.lacation
    console.log(response.data.name, response.data.followers, response.data.public_repos, response.data.repos_url,  );
})
axios(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=Białystok`)
.then(res => console.log(res.data))







const dataJson = {
    number: data.number,
    filename: data.filename
}

request( `http://numbersapi.com/${dataJson.number}`, (error, response, body) => {
    if(!error && response.statusCode === 200){
        console.log(body)
    }
    else if(error) {
        console.log(error)
    }
})
// axios.get( `http://numbersapi.com/${dataJson.number}`)
// .then((response) => {
//         console.log(response.data)
// })
// .catch(function (error) {
//   console.log(error);

//   }
// )



console.log(dataJson.filename,dataJson.number)

fs.stat('ap.js', (error, stat) => {
  if(error){
      console.log(error)
  }else{
      console.log(stat.size, stat.atime, stat.mtime)
  }
})

console.log('hello'.rainbow)