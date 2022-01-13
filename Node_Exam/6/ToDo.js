const fs = require('fs');
const file = './fil.json';
function storeData (data, path){
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

