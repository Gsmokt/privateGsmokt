const fs = require('fs');

function storeData (name, data, path){
  if(!name) return console.log('Użyj komend: add, delete lub list.');
  if(name !== 'add')  return console.log('Wpisz poprawnie komendę');
  const er = new Error('Nie udało się dodać nowego zadania');
  if(!data){
    console.log('Wpisz zadanie')
  }else{
      try {
  const fl = JSON.parse(fs.readFileSync(path));
  const ob = {task: data};
  fl.push(ob);
        
    fs.writeFileSync(path, JSON.stringify(fl));
    console.log('Dodałeś nowe zadanie!');
  } catch (error) {
    console.log(er.message);
  }
  }
}
module.exports={
    storeData
}

