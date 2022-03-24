// class Palindromic{
//     constructor(text){
//         this.text = text
//     }
//     check(){
//         if(a !== b) return;
//         this.text.split('')
//     }
// }
// const text = 'sedes';
// const txt = [...text].reverse().join('');

// const check = (nam, num, a) => {
//   const b = [];
//   if(num > a.length) return b;
//   let c = a.substring(nam,num);
//   [...a].map((e,i) => {
//     if(i < a.length- 2){
//       c == a.substring(0+i,i+2) ? console.log('siema') : null;
  
      
//     }
//   });
//   return check(++nam,++num,a);
// }

// console.log(check(0,3,'sedes'));

// const a = 'sedes';
// const b = 'sedes';

// const c = 'abcdefghijklmnopb';
// for(let i = 0; i < c.length - 2; i++){
//   console.log([...c].slice(i,i+).join(''));
// }
// const func = (array) => {
//   let i = 3;
//   let j = array.length-3;
//   const arr = [];
//   const e = [...array];
//   let a = Math.ceil(array.length / 2); //najmniejsza całkowita
//   let b = Math.floor(array.length / 2); //największa całkowita
//   let c= a;
//   let d = b;
//   while(i <= array.length){
//   if(e.slice(0,i).reverse().join("") === [...array].slice(0,i).join('')){
//     arr.push([...array].slice(0,i).join(''))
//   };
//   if(e.slice(j,e.length).reverse().join("") === [...array].slice(j,[...array].length).join('')){
//     arr.push([...array].slice(0,i).join(''))
//   };
//   console.log(arr)
//   if(b <= array.length-3){
//     if(e.slice(d,b+3).reverse().join('') === [...array].slice(d,b+3).join('')){
//       arr.push([...array].slice(d,b+3).join(''))
//     }   // w prawo
//   }
//   if(c >= 2){
//     console.log([...array].slice(c-2,a+1).join(''));
//     if(e.slice(c-2,a+1).reverse().join('') === [...array].slice(c-2,a+1).join('')){
//       arr.push([...array].slice(c-2,a+1).join(''))
//     }  // w lewo
//   }

//   i = i + 1;
//   j = j - 1;
//   a = a + 1;
//   c = c - 1;
//   b = b + 1;
//   d = d -1;
// }
// }
// func('baerren');  




const a = "baerren";
const arg = a.split("").reverse().join("");
// console.log(arg);
// console.log(arg.slice(arg.length-3,arg.length))


// for(let i = 0; i < arg.length-2; i++){
//     console.log(arg.substring(0+i,i+3));
// }

// [...arg].map((e,i,a) => a.map((el,ind,arr) => {
//    i+ind < arg.length-2 ? console.log(a.slice(i+ind,i+ind+3)) :null}
// ))


// [...arg].map((e,i,a) => a.map((el,ind,arr) => {
//     i+ind < arg.length-3 ? console.log(a.slice(i+ind,i+ind+4)) :null;
// }
//  ))

// [...arg].map((e,i,a) => i < a.length-2+i ? console.log(a[i]+a[i+1]+a[i+2]+a[i+3]):null )



/** */
//     let arr = '';


//   for(let i = 3; i < arg.length+1; i++){
//    for(let j =0; j < arg.length; j++){
//        if(i+j <= arg.length)
//        [...arg].slice(0+j,i+j).reverse().join('') === arg.substring(0+j,i+j) ? arr = arg.substring(0+j,i+j):null;
//    }
// }
// console.log(arr)
/** */



// for(let i = 3; i < arg.length; i++){
//     for(let j =0; j < arg.length; j++){
//         if(i+j <= arg.length)
//          console.log(arg.substring(0+j,i+j));
//     }
//  }

// [...arg].slice(0+j,i+j).reverse().join('') === arg.substring(0+j,i+j) ? arr.push(arg.substring(0+j,i+j)):null;

// class Palindromic{
//     constructor(text){
//         this.text = text
//     }
//     reverse(){
//         return this.text = [...this.text].reverse().join('');
//     }
// }
// class Polindrm{
//     constructor(text){
//         this.text = text
//     }
//     check(text){

//     }
// }





// /** */
    let arr = '';


  for(let i = 3; i < arg.length+1; i++){
   for(let j =0; j < arg.length; j++){
       if(i+j <= arg.length)
    //   console.log(arg.substring(arg.length-i-j,arg.length-j));
      arg.substring(arg.length-i-j,arg.length-j) === a.substring(0+j,i+j) ? arr = a.substring(0+j,i+j):null;
   }
}
console.log(arr)
// /** */





 






