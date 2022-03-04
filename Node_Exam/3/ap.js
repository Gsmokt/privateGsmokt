let fs = require('fs');
const util = require('util');
const statAsync = util.promisify(fs.stat);

const stat = (filename) => {
    const result = statAsync(filename);
    return result;
};

const func = async(filename) => {
    try{
      const res = await stat(filename);
      const stats = {
      File_size: `${res.size} B`,
      File_creation_date: `${res.birthtime.toLocaleString()}`,
      File_data_modification_date: `${res.mtime.toLocaleString()}`,
      File_status_modification_date: `${res.ctime.toLocaleString()}`
      }
      for(const [key,value] of Object.entries(stats)){
      console.log(`${key}: ${value}`);
      }
    }catch(error){
      console.log(`${error} -  Nie udało się pobrać danych`);
    }
};

func(__filename);


// Przykład wywołania programu:
// > node ap.js
