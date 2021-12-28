const yargs = require('yargs')
const {argv} = require('yargs')
let fs = require('fs');
const table = []
const param = yargs.argv;
console.log(param.todo)
function toDo(){
table.push(param.todo)
return table
}
console.log(toDo())




