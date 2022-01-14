let fs = require('fs');


const func = (filename) => {
const er = new Error('Nie udało się pobrać danych');
try{
    const stat = fs.statSync(filename);
    console.log(`File size: ${stat.size} B`);
    console.log(`File creation date: ${stat.birthtime.toLocaleString()}`);
    console.log(`File data modification date : ${stat.mtime.toLocaleString()}`);
    console.log(`File status modification date: ${stat.ctime.toLocaleString()}`);
  }catch(error){
    console.log(er.message);
  }
}
func(__filename);
