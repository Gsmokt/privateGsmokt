const initialState = num => {
  const arr = [num];
  let gameStatus = false;
  return arg => {
    if(gameStatus) return 'You have already finished the game. Try again!';
    else if (!arg) return "Enter a number";
    else if (arg < 1 || arg > 100) return "Enter a number from the range: 1 - 100";
    else if (arg === num) {gameStatus = true; return `You won! Needed ${arr.length} tries`;}
    else if (arr.includes(arg)) return "You tried this number";
    arr.push(arg);
    if (arg < num) return "Too small";
    else return "Too large";
  }
}
const game = initialState(Math.floor(Math.random() * 100) + 1);
game(1);



