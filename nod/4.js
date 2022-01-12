const fs = require('fs');
const axios = require('axios');
const data = require('./data.json');

const dataJson = {
    number: data.number,
    filename: data.filename
};

axios.get( `http://numbersapi.com/${dataJson.number}`)
.then((response) => {
    const er = new Error('Nie udało się zapisać pliku');
    try{
       fs.writeFileSync(dataJson.filename, response.data);
       console.log('Zapisano pomyślnie');
    }catch(error){
        console.log(er.message);
    }
    })
.catch((error) => {
  console.log(error.name + ': ' + error.message);
}
);

