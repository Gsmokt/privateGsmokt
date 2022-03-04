const primeNumbers = (startNumber, endNumber) => {
    if(startNumber > endNumber) return;
    startNumber%2 !== 0 ? console.log(startNumber): null;
    primeNumbers(++startNumber, endNumber);
}
primeNumbers(1,100);

