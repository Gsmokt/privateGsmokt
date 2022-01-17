const fs = require('fs');
const axios = require('axios');
const data = require('./data.json');
const util = require('util');
const writeAsync = util.promisify(fs.writeFile);

const dataJson = {
    number: data.number,
    filename: data.filename
};

const write = async(path, data) => {
    const file = await writeAsync(path, data);
    return file;
  }

const func = (num) => {
    return new Promise((resolve, reject) => {
        axios.get( `http://numbersapi.com/${num}`)
        .then((response) => {
            if(response.status === 200 && response.statusText === 'OK') resolve(response);
          })
          .catch(error => reject(`Błąd pobierania: ${error}`));
        })
}

async function result(num){
    try{
        const res = await func(num);
        try{
            await write(dataJson.filename, res.data);
            console.log('Zapisano pomyślnie');
        }catch(error){
            console.log(`${error} - nie udało się zapisać pliku`);
        }
    }catch(error){
        console.log(error);
    }
}

result(dataJson.number);

// Przykład wywołania programu:

// > node ap.js 


