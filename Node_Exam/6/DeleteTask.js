const fs = require('fs');

function deleteTask(number, path){
  if(!number){
    console.log('Wpisz numer zadania')
  }else{
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
        const er = new Error('Nie udało się usunąć zadania');
        console.log(er.message);
      };
  }
};

module.exports = {
    deleteTask
}
