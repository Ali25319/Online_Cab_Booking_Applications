// function largetOfNumbers( n1, n2, n3){
//  let largest;
//  if(n1>=n2 && n1>=n3){
//     largest = n1;
//  }
//  else if (n2>=n1 && n2>=n3){
//     largest = n2;
//  }
//  else{
//     largest = n3;
//  } 
//  return largest ;
// }
// console.log(largetOfNumbers (10 , 40, 50));
//task-2..
//  let n=10
//  let str='';
//  let out = 1;
//  for (let i=1; i<=n; i++){
//     out = out * i;
//     console.log('Factorial of :' ,  i,  'is', out)
//  }
//task-1.v
//  function Factorial(n){
//     let out= 1;
//     for(let i=1; i<=n; i++){
//         out = out * i;
//     }
//     return out;
//  }
//  function printFactorial(num){
// for (let i=1; i<=num; i++){
//     let fact = Factorial(i);
//  console.log('Factorial of' , i , 'is' , fact);
//    }
// }
// printFactorial(5);
//task-2
// let n=20;
// let sum=0;
//  for (let i=1; i<=n; i++){
//     sum = sum+i;
//  }
//  console.log(sum)
//task2
// function sumOf(n){
//      let sum=0;
//      for (let i=1; i<=n; i++){
//         sum= sum+i;
//      }
//      return sum;
// }
// let num=20;
// console.log(sumOf(num))
//  function replaceChars(str , char1, char2){
//     let outStr = '';
//     let len= str.length;
//  for( let i=0; i<len; i++){
//   if(str[i]==char1){
//     outStr = outStr + char2;
//   }
//   else{
//     outStr= outStr + str[i];
//   }
// }
// return outStr;
//  }
// console.log(replaceChars('abcdoonmo','m','x '));
// const isRightTriangle = (a, b, c) => {
//    const con1 = (a*a) === (b*b) + (c*c);
//    const con2 = (b*b) === (a*a) + (c*c);
//    const con3 = (c*c) === (a*a) + (b*b);
//    return con1 || con2 || con3;
// };
// const side1 = 6;
// const side2 = 3;
// const side3 = 4;
// console.log(isRightTriangle(side1, side2, side3));
//task-4
// function triangleThree(a,b,c){
//      let num1 = (a*a)==(b*b) + (c*c);
//      let num2 = (b*b)==(a*a) + (c*c);
//      let num3 = (c*c)==(a*a) + (b*b);
//      return num1 || num2 || num3;
// };
//     let side1=12;
//     let side2=13;
//     let side3=5;
// console.log(triangleThree(side1 , side2 , side3));
//task-5.
// let a=7
// let b=5
// let c=15
// if(a+b>c && b+c>a && a+c>b){
//     console.log('true');
// }
// else{
//     console.log('false')
// }
// function triangle(a,b,c){
//     let num1= (a+b>c && b+c>a && a+c>b);
//     return num1;
// }
//     let side1=6;
//     let side2=10;
//     let side3=3;
// console.log(triangle(side1, side2, side3));
//anotherway..
// function triangle(a,b,c){
//     if(a+b>c && b+c>a && a+c>b){
//     return true;
// }
// else{
//     return false;
// }
// }
// console.log(triangle(8, 14, 24));
// task-6;;';';'
// simple string reverse
// let str = 'Edufect';
// let rev = ' ';
// let len = str.length;
//  for(let i=len-1; i>=0; i--){
//     rev = rev + str[i];
//  }
//  console.log(rev);
///task----6..
//  function reverseString(str) {
//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// // take input from the user
// const string = prompt('Enter a string: ');
// const result = reverseString(string);
// console.log(result);
// function reverse(str){
//     let newstr='';
//     for (let i=str.length-1; i>=0; i--){
//         newstr = newstr + str[i];
//     }
//     return newstr;
// }
// console.log(reverse('Java'));
//task-10...
// function isPrime(num) {
//     if (num === 2) {
//       return true;
//     } else if (num > 1) {
//       for (var i = 2; i < num; i++) {
//         if (num % i !== 0) {
//           return true;
//         } else if (num === i * i) {
//           return false
//         } else {
//           return false;
//         }
//       }
//     } else {
//       return false;
//     }}  
//   console.log(isPrime(10));
// let n=17;
// let count=0;
// for (let i=2; i<n; i++){
//     if(n%i==0){
//         count++;
//     }
// }
// if (count==0){
//     console.log('true');
// }
// else{
//     console.log('false');
// }
////simple primeNumbers by using for looops
//    let n=90;
//    let count=0;
//    for(let i=2; i<n; i++){
//     if(n%i==0){
//         count++;
//     }
//    }
//    if (count==0){
//     console.log('true')
//    }
//    else{
//     console.log('false')
//    }
//primenumbers with functions..
// function isPrime(num){
//     let count=0;
//     for (let i=2; i<num; i++){
//         if(num%i==0){
//            count++;
//         }
//     }
//     if (count==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isPrime(31 ));
"use strict";