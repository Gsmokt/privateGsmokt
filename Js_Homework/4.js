class Fibonacci {
  constructor(arg1, arg2) {
    (this.arg1 = arg1), (this.arg2 = arg2);
  }
  result() {
    if (this.arg1.length >= this.arg2) return this.arg1;
    this.arg1.push(
      this.arg1[this.arg1.length - 2] + this.arg1[this.arg1.length - 1]
    );
    return this.result();
  }
}
const fibonacci = new Fibonacci([1, 1], 10);
console.log(fibonacci.result());
