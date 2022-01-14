const fs = require('fs');
const axios = require('axios');
const data = require('./data.json');

const dataJson = {
    number: data.number,
    filename: data.filename
};

const func = (num) => {
    return new Promise((resolve, reject) => {
        axios.get( `http://numbersapi.com/${num}`)
        .then((response) => {
            if(response.status === 200 && response.statusText === 'OK') resolve(response);
          })
          .catch(error => reject(`Błąd pobierania: ${error.response.status}`));
        })
}

async function result(num){
    const er = new Error('Nie udało się zapisać pliku');
    try{
        const res = await func(num);
        try{
            fs.writeFileSync(dataJson.filename, res.data);
            console.log('Zapisano pomyślnie');
        }catch(error){
            console.log(er.message);
        }
    }catch(error){
        console.log(error);
    }
}

result(dataJson.number);

// Przykład wywołania programu:

// > node ap.js 


