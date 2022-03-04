const game = (num) => {
  const arr = [];
  arr.push(num);
  function nam(arg){
    if(!arg) return console.log('Enter a number');
    if(arg < 1 || arg > 100) return console.log('Enter a number from the range: 1 - 100');
    if(arg === num) return console.log(`You won! Needed ${arr.length} tries`);
    if(arr.includes(arg)) return console.log('You tried this number');
    arr.push(arg);
    if(arg < num) return console.log('Too small');
    if(arg > num) return console.log('Too large');
    return;
  }
  return nam;
}
const gam = game(Math.floor(Math.random()*100)+1);
console.log(gam());


