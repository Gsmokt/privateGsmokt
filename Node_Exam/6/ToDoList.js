const fs = require('fs');

const printData = (path) => {
    const er = new Error('Nie udało się wyświetlić listy');
    try{   
    const fl = JSON.parse(fs.readFileSync(path));
    if(fl.length === 0){
        console.log(`Aktualnie lista jest pusta. Możesz dodać nowe zadanie`);
    }else{
            console.log('Twoja lista zadań:');
            fl.map((e,i) => {
            console.log(`${i+1} - ${e.task}`);
            })
        } 
    }catch(error){
    console.log(er.message);
    }
}

module.exports = {
    printData
}
