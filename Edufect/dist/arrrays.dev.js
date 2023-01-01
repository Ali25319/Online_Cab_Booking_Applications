"use strict";

// //count even numbers in given array
// let array=[2,5,6,10,8,16,15];
// let count=0;
// let len=array.length;
// for(let i=0; i<=len; i++){
//     if(array[i]%2==0){
//         count++;
//     }
// }
// console.log(count);
//sum of no .divisible by 5.;;
// let nums=[2,5,10,12,15,20,21];
// let len=nums.length;
// let sum=0;
// for(let i=0; i<=len; i++){
//     if(nums[i]%5==0){
//     sum= sum + nums[i];
// }}
// console.log(sum)
//Change each string to uppercase
// let string=['hello', 'hi', 'Done', 'Boss'];
// let len=string.length;
// for(let i=0; i<len-i; i++){
//     let str= string[i];
// string[i]= str.toUpperCase();
// }
// console.log(string);
// task-2--Given an array, print the sum of the numbers in the array.
// let num = [-1,2,-3,4,-5,6,-7];
// let sum = 0;
// let len = num.length;
// for (let i=0; i<len; i++){
//     sum = sum + num[i];
// }
// console.log(sum);
//task-3..Given an array, print the sum and count of the multiples of 3 in the array.
// let nums = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// let count = 0;
// let len = nums.length;
// for (let i=0; i<=len; i++){
//     if(nums[i]%3==0){
//         sum = sum +nums[i]
//     if (nums[i]%3==0){
//         count++;
//     }
//     }
// }
// console.log('3 sum = ' , sum  , '3Count = ' , count);
//task-4..Given an array, print the sum of the even and odd numbers in the array....
// let num1= [1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// let sum1=0;
// let len= num1.length;
// for(let i=0; i<len; i++){
//     if(num1[i]%2==0){
//         sum += num1[i];
//     }
//     else if(num1[i]%2!=0)
//     sum1 += num1[i];
// }
// console.log('Even Sum = ' , sum);
// console.log('Odd Sum = ' , sum1);
//task-5..Given an array, print the count and the numbers greater than 21 in the array.
//task-6;Given an array, add 10 to all the elements in the array.
// let array1 = [23,25];
// let len = array1.length;
//     for(let i=0; i<len; i++){
//      array1[i] = array1[i] + 10;
// }console.log( array1);
//task-7 Given an array, add Hello to all the elements in the array. Also, print the array.
// let str = ['Jack', 'Mary'];
// let len = str.length;
//  let string = '';
// for ( i=0; i<len; i++){
//     // str[i] = str[i]+ " Hello";
//     string += str[i] + ' Hello ';
// }
// console.log(string)
//task=8 ..Given an array as input, convert all odd numbers in the array to the nearest even number greater than it. Also, print the array..
// let convert = [5,7,9];
// let count=0;
// let len= convert.length;
// let add=0;
// for ( let i=0; i<len; i++){
//     if(convert[i]%2!=0){
//         convert[i]= convert[i]+1;
//     }
// }
// console.log(convert);
//task-9..Given an array of numbers as input, find out which of the first or last element is larger. If the first is larger print FIRST, if the last is larger print LAST. If they are equal print EQUAL. Also print the value.
// let arr9 = [4,8,12,20,6];
// let len =  arr9.length 
// console.log(arr9[0].length-1)
///task=11.Given an array as input, find the largest number in the array.
// let array = [5,18,26,30,40,6];
// let len = array.length;
// let max =0;
// for (let i=0; i<len; i++){
//     if(array[i] > max){
//         max = array[i];
//     }
// }
// console.log(max);
// let array = [5,18,26,30,40,6,50];
// let len = array.length;
// let min=0;
// for (let i=0; i<len; i++){
//     if (array[i]>min){
//         min = array[i];
//     }
// }
// console.log(min)
// const arr = [1, 2, 3];
// const max = Math.max(...arr);
// console.log(max);
// let array = [33,44,55,72,56,78];
// let min = Math.min(...array);
// console.log(min);
//   function largest(arr) {
//     let i;
//     let max = arr[0];
//     for (i = 1; i < arr.length; i++) {
//       if (arr[i] > max)
//         max = arr[i];
//     }
//   return max;
//   }
//   let arr = [10, 324, 45, 90, 08];
//   console.log("Largest in given array is " + largest(arr));
// let array4= [25,20,14,75,100,50,2,7,21];
// let max = 0;
// let len = array2.length;
// for (let i=0; i<len; i++){
//     if(array2[i]>max){
//         max= array2[i];
//     }
// }
//  console.log(max);
//  const array1 = [100,10];
// const array2 = [20,50,64,200];
// const array3 = array1.concat(array2);
// console.log(array3);
// def getSum(): 
//   sum = 0 
//   for x in range(1, 1000): 
//     if x % 3 == 0 or x % 5 == 0: 
//       sum += x 
//   return sum 
// total=0
// i=0
// while i<1000:
//     if i%3==0 or i%5==0:
//         print(num)
//         total+=i
//     i+=1
// // print("Total is: ")
// // to sum the multiples of 3 and 5 under 1000.
// var sum = 0;
// for (var x = 0; x < 1000; x++)
// {
//     if (x % 3 === 0 || x % 5 === 0)
//     {
//        sum += x;
//     }
// }
// console.log(sum);
// let sum=0;
// for (let i=0; i<=1000; i++){
//     if (i%3===0 || i%5===0){
//         sum += i;
//     }
// }
// console.log(sum);
var n = 1000;
var num = 0;

for (var i = 0; i <= n; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    num = num + i;
  }
}

console.log(num);