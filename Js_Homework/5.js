const numbersFilter = arg => {
  if (typeof arg !== 'string' && typeof arg !== 'number') console.log("Enter a number or string");
  else if (typeof arg === "number")
    console.log(arg.toString().match(/\d/g).map(e => parseInt(e)));
  else 
    console.log(arg.match(/\d/g).map(e => parseInt(e)));
};

numbersFilter(2342);
numbersFilter('A243b');







