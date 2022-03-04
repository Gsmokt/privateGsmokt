// const digits = (...param) => {
//     console.log(param)
//   console.log(param.filter(el => typeof el === 'number'));
// };

// digits('A,2,3,4,2')

const game = (num) => {
  const arr = [];
  arr.push(num);
  return function(){
    console.log(arr)
  }
}
const 