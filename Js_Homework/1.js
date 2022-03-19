const initialNumbers = (start, end) => {
  const array = [++start];
  const primeNumbers = (start, end) => {
    if (start > end) return array;
    array.every(el => start % el !== 0 && el !== start) ? array.push(start) : null;
    return primeNumbers(++start, end);
  };
  return primeNumbers(start, end);
};
console.log(initialNumbers(1, 100));
