const reverse = (array, k) => {
  for (let i = 0; i < k; i++) {
    array.unshift(array.pop());
  }
  return array;
}
console.log(reverse([1, 2, 3, 4], 2));
