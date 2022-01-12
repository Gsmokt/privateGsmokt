const colors = require('colors');
const text = process.argv[2];
if(text){
    console.log(text.rainbow);
}else{
    console.log('Podaj argument!');
};
// Przykładowe wywołanie: node 2.js hello