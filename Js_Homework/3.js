const arr = (nums, k) => {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
  }
console.log(arr([1,2,3,4], 2));