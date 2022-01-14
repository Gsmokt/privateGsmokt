const { Command } = require('commander');
const program = new Command();
const {api} = require('./main');

program
.command('user [name] [followers]',{isDefault:true})
.description('Show user info')
.action((name,followers) => api(name,followers))

program.parse(process.argv)

// Przykład wywołania programu:

// > node ap.js octocat
// > node ap.js octocat followers
