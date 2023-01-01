//prime numbers
// let num=90;
// let count=0;
// for(let i=2; i<num; i++){
//     if(num%i==0){
//         count++;
//     }
// }
// if(count==0){
//     console.log('true');
// }
// else{
//     console.log('false');
// }


//with functions
//  function primeNumbers(n1){
//     let count=0;
//     for (let i=2; i<n1; i++){
//         if (n1%i==0){
//             count++
//         }
//     }

//  if(count==0){
//     return true;
//  }
//  else{
//     return false;
//  }
// }
//  console.log(primeNumbers(19))

//find even /odd numbers..

// let n=17;
// //  let  count=0;
// // for(let i=0; i<=n; i++){
// //      count++;
      
//     if (n%2==0){
//         console.log('even');
//     }
//     else{
//         console.log('odd');
//     }//}


//with functions
// function checkEvenOdd(n) {
//     for(let i=0; i<=n; i++){

//     }
//     if (n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
//     console.log(checkEvenOdd(43));



//factorial//5-120...
// let n=5;
// let str =1;
// for(let i=1; i<=n; i++){
//   str= str*i
// }
// console.log(str)



// function factorial(n){
//     let out=1;
//     for (let i=1; i<=n; i++){
//         out= out*i;
//     }
//     return out
// }
// function printFactorial(num){
//     for(let i=0; i<=num; i++){
//         let fact= factorial(i);
//         console.log('factorial of ' , 'is' , fact);
//     }
//   }
// printFactorial(5)



 
// JavaScript program to display Prime numbers till N
 
// // function to check if a given number is prime
// function isPrime( n)
// {
//       // since 0 and 1 is not prime return false.
//       if(n == 1 || n == 0) return false;
   
//       // Run a loop from 2 to n-1
//       for(var i = 2; i < n; i++)
//       {
       
//         // if the number is divisible by i, then n is not a prime number.
//         if(n % i == 0) return false;
//       }
//       // otherwise, n is prime number.
//       return true;
// }
 
 
// // Driver code
// var N = 75;
 
// //check for every number from 1 to N
//   for(var i = 1; i <= N; i++)
//   {
//       //check if current number is prime
//       if(isPrime(i)) {
// console.log( i );
        
//       }
      
// }