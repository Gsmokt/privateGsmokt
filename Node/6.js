const fs = require('fs');
const yargs = require('yargs');
const argv = yargs.argv;
const _ = require('lodash');
const command = argv._[0];
const {storeData} = require('./ToDo');
const fil = require('./fil.json')

yargs.command({
    command:'add',
    describe: 'Add new task',
    builder: {
        title : {
            describe: 'Note Title',
            type: String
        }
    },
  handler: function(argv){
    storeData(argv.title, 'fil.json')
 }}).parse()
console.log(JSON.stringify(fil))


