
const numbersFilter = (arg) => {
  if(typeof arg === 'number') console.log(arg)
  else if(typeof arg === 'string') console.log(parseInt(arg.match(/\d/g).join(''), 10));
  else return;
};

numbersFilter('aFFF,,,c2f3g42');