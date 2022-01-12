let fs = require('fs');
const { Command } = require('commander');
const program = new Command();
const axios = require('axios');
const {api} = require('./main');

program
.command('user <name> [followers]',{isDefault:true})
.description('Show user info')
.action((name,followers) => api(name,followers))

program.parse(process.argv)
