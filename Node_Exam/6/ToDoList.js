const fs = require('fs');
const util = require('util');
const readAsync = util.promisify(fs.readFile);

  const read = async(path) => {
    const file = await readAsync(path, {encoding:'utf-8'});
    return file;
  }

  const printData = async(path) => {
      try{
        const file = await read(path);
        const fl = JSON.parse(file)
        if(fl.length === 0){
                  console.log(`Aktualnie lista jest pusta. Możesz dodać nowe zadanie`);
              }else{
                      console.log('Twoja lista zadań:');
                      fl.map((e,i) => {
                      console.log(`${i+1} - ${e.task}`);
                      })
                  } 
      }catch(error){
        console.log(new Error('Nie udało się wyświetlić listy'));
      }
  }

module.exports = {
    printData
}
