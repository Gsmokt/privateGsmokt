const fs = require('fs');
const util = require('util');
const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

const read = async(path) => {
  const file = await readAsync(path, {encoding:'utf-8'});
  return file;
}

const write = async(path, data) => {
  const file = await writeAsync(path, data);
  return file;
}

async function storeData (name, data, path){
  if(!name) return console.log('Użyj komend: add, delete lub list.');
  if(name !== 'add')  return console.log('Wpisz poprawnie komendę');
  if(!data){
    console.log('Wpisz zadanie')
  }else{
    try{
          const file = await read(path);
          const fl = JSON.parse(file);
          const ob = {task: data};
          fl.push(ob);
          await write(path, JSON.stringify(fl));
          console.log('Dodałeś nowe zadanie');
    }catch(error){
      console.log(new Error('Nie udało Ci się dodać nowego zadania'));
    }
  }
}
module.exports={
    storeData
}

