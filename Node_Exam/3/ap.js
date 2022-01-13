let fs = require('fs');


const func = (filename) => {
const er = new Error('Nie udało się pobrać danych');
try{
    const stat = fs.statSync(filename);
    console.log(`File size: ${stat.size}`);
    console.log(`File creation date: ${stat.birthtime}`);
    console.log(`File data modification date : ${stat.mtime}`);
    console.log(`File status modification date: ${stat.ctime}`);
  }catch(error){
    console.log(er.message);
  }
}
func(__filename);