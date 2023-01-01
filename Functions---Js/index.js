// function square(num){
//     let sq = num*num;
//     console.log(sq);
// }
// square(5);
// square(10);

// function square(num){
//     let sq = num*num;
//     return sq;
// }
// console.log(square(5));
// console.log(square(10));
// let sumOfSquares = square(4) + square(4);
// console.log(sumOfSquares);

// function myFunction(p1, p2) {
//     return p1 * p2;   // The function returns the product of p1 and p2
//   }
//   let x = myFunction (4,3);
//    console.log(x);

// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
//   const a = factorial(1); // a gets the value 1
// const b = factorial(2); // b gets the value 2
// const c = factorial(3); // c gets the value 6
// const d = factorial(4); // d gets the value 24
// const e = factorial(5); // e gets the value 120

// console.log(a,b,c,d,e)
// function foo(i) {
//     if (i < 0) {
//       return;
//     }
//     console.log('begin: ' + i);
//     foo(i - 1);
//     console.log('end: ' + i);
//   }
//   foo(4);
  
// function A(x) {
//     function B(y) {
//       function C(z) {
//         console.log(x + y + z);
//       }
//       C(3);
//     }
//     B(2);
//   }
//   A(1); // logs 6 (1 + 2 + 3)

// function Person() {
//     this.age = 1;
  
//     setInterval(() => {
//       this.age++; // `this` properly refers to the person object
//     }, 1000);
//   }
  
//   const p = new Person();

//   console.log(p)