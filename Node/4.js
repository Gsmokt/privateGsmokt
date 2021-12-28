const fs = require('fs');
const axios = require('axios');
const data = require('./data.json');

const dataJson = {
    number: data.number,
    filename: data.filename
};

axios.get( `http://numbersapi.com/${dataJson.number}`)
.then((response) => {
        return response.data;
})
.then((data) => {
    fs.writeFileSync(dataJson.filename, data);
})
.catch((error) => {
  console.log(error);
}
);

