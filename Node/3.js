let fs = require('fs');

fs.stat(__filename, (error, stat) => {
    if(error){
        console.log(error);
    }else{
        console.log(stat.size, stat.atime, stat.mtime);
    };
  });