const { concatSeries } = require('async');
const fs = require('fs');
const request = require('request');
const yargs = require('yargs');
const argv = require('yargs');
const {id} = yargs.argv;
const {getUser} = require('./user')
const {getWeather} = require('./weather')

const data = {
    Name:null,
    Temp:null
}



getUser(id)
.then((user) => {
  getWeather(user)
  .then((res) => {
    data.Name = user.name;
    data.Temp = res.main.temp
  })
  .then(() => {
    const er = new Error("Błąd zapisu");
    try{
        fs.writeFileSync('file.json', JSON.stringify(data));
        console.log('Zapisano pomyślnie');
    }catch(error){
        console.log(er.message);
    }
  })
})
.catch(error => 
    console.log(error.name + ': ' + error.message));








