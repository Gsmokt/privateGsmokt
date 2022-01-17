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

const deleteTask = async(number, path) => {
  if(!number){
    console.log('Wpisz numer zadania, albo: all, by usunąć całą listę')
  }else{
    try {
    const file = await read(path);
    const fl = JSON.parse(file);
    if(fl.length <= 0){
      console.log('Lista jest pusta, nie możesz nic usunąć')
    }else if(number === 'all'){
      fl.splice(0,fl.length);
      await write(path, JSON.stringify(fl));
      console.log('Usunąłeś wszystkie zadania!');
    }else{    
      fl.splice(number - 1,1);
      await write(path, JSON.stringify(fl));
      console.log('Usunąłeś zadanie!');
    }
      } catch (err) {
        console.log(new Error('Nie udało się usunąć zadania'));
      };
  }
};

module.exports = {
    deleteTask
}
