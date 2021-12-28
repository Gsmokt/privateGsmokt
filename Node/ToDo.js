const fs = require('fs')
const file = './fil.json';
const storeData = (data, path) => {
  const fl = JSON.parse(fs.readFileSync(file))
  const ob = {name:data};
  const obj = [];
  try {
    var todosString = fs.readFileSync(path);
    obj = JSON.parse(todosString);
} catch (e) {
fl.push(ob)
}
  try {
    fs.writeFileSync(path, JSON.stringify(fl))
  } catch (err) {
    console.error(err)
  }
}


module.exports={
    storeData
}
