const { Command } = require('commander');
const program = new Command();
const {storeData} = require('./ToDo');
const {printData} = require('./ToDoList');
const {deleteTask} = require('./DeleteTask');


  program
  .command('ad [add] [task]', {isDefault:true})
  .description('Add new task')
  .action((add, task)=> storeData(add, task, 'fil.json')
  )
  program
  .command('delete [num]')
  .description('Delete task')
  .action((num)=> deleteTask(num, 'fil.json')
  )
  program
  .command('list')
  .description('Print tasks')
  .action(()=> printData('fil.json')
)
  program.parse(process.argv)

  // Przykład wywołania programu:

  // > node ap.js add "napisac program na zaliczenie z NodeJS"
  // > node ap.js list
  // > node ap.js delete 




