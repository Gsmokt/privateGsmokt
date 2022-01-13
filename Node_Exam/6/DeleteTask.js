const fs = require('fs');

const deleteTask = (number, path) => {
  const er = new Error('Nie udało się usunąć zadania');
    try {
    const fl = JSON.parse(fs.readFileSync(path));
    if(fl.length <= 0){
      console.log('Lista jest pusta, nie możesz nic usunąć')
    }else{    
      fl.splice(number - 1,1);
      fs.writeFileSync(path, JSON.stringify(fl));
      console.log('Usunąłeś zadanie!');
    }
      } catch (err) {
        console.log(er.message);
      };
};

module.exports = {
    deleteTask
}
