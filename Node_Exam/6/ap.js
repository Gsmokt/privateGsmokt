const { Command } = require('commander');
const program = new Command();
const {storeData} = require('./ToDo');
const {printData} = require('./ToDoList');
const {deleteTask} = require('./DeleteTask');


  program
  .command('add <task>')
  .description('Add new task')
  .action((task)=> storeData(task, 'fil.json')
  )
  program
  .command('delete <num>')
  .description('Delete task')
  .action((num)=> deleteTask(num, 'fil.json')
  )
  program
  .command('list')
  .description('Print tasks')
  .action(()=> printData('fil.json')
)
  program.parse(process.argv)




