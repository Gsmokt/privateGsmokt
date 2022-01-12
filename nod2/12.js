const func = () => {
    let number = 0;
   interval = setInterval(() => {
      console.log('Hello');
      number++;
      if(number === 5) finish();
  }, 1000); 
}

const finish = () => {
    clearInterval(interval);
    console.log('Finish');
}

func();