"use strict";

//task1.i-Array of squares of numbers
// const nums = [2,3,4,5,6,7];
// let arr= nums.map(function (elements) {
//     return elements*elements;
//   })
//   console.log(arr);
//task-2-Given an array of numbers, create a new array whose numbers are twice the number of the input array. Use map.
//const  nums = [4,8,12,20,6];
// const nums= [5,10,15,5,10,15];
// let newArr = nums.map(function(element){
//      return element*2;
// });
// console.log(newArr);
//task-3-Given an array of numbers, create a new array whose numbers 
//are the squares of the number of the input array. Use map.
// let nums = [10,2,25,20,30] ; //[4,8,12];
// let newArr= nums.map(function (number){
//     return number*number;
// });
// console.log(newArr);
//task-4-Given an array of numbers,
// create a new array whose numbers the same if even and zero if odd. Use map
// const arr =  [77]// [5,10, 5,10,5,10];//[4,8,12,3,5,7];
//   let newArr = arr.map(function(element){
//     if(element%2==0)
//     return element
//     else(element%2==1)
//     return 0;
//   });
//   console.log(newArr)
//task-5-Given an array of numbers, create a new array whose has the string Even if the number is even,
// and Odd if the number is Odd. Use map.
// const arr=[7,2,25,10] ;
// let str = arr.map(function(element){
//     if(element%2==0)
//     return "Even"
//     else(element%2==1)
//     return "Odd"
// });
// console.log(str);
//tsk-6-Given an array of string, 
//create a new array whose strings are double the string in the array. Use map.
// const arrStr = ["A","B","C","X","Y"]//["AB","+#","EF"];//["Hi","Hello","Bye"];
//  let arrDouble= arrStr.map(function(element){
//       return element+element;
//  })
//  console.log(arrDouble);
//  const arrStr = ["A","B","C","X","Y"]//["AB","+#","EF"];//["Hi","Hello","Bye"];
//  let arrDouble= arrStr.map(function(element){
//       return doubleNumber(element);
//  })
//  console.log(arrDouble);
//  function doubleNumber (str){
//     return str+str;
//  }
//task-7-Given an array of JSON, create a new array of strings as shown.
// Use map.So, if the JSON array is 
// const prods=[{"name" : "Mark", "age" : 23},
// {"name" : "Steve", "age" : 28},
// {"name" : "Mary", "age" : 25},
// {"name" : "Bill", "age" : 34}];
// let str = prods.map(function(element){
//     let v1 = element.name + " is " + element.age + " years old";  
//     return v1;
// });
// console.log(str);
//task-8Given an array of names, create a string using map and join as shown below.So, if the array was ["Mark","James","Martha"]the string should be 
//<ul><li>Mark</li><li>James</li><li>Martha</li></ul>
// const arr =  ["Mark","James","Martha"];
// let str= arr.map(function(element){
//  return '<ul><li>'+element+'</li></ul>';
// });
// console.log(str);
//task--9--
// let  arrJson = [{"id" : 101, "name" : "Mark"},
//                 {"id" : 105, "name" : "Steve"},
//                 {"id" : 78, "name" : "James"}]
//    let newArr = arrJson.map(function(element){
//     let v1 =element.id;
//     let click= '<button onClick=clicked' +element.id+'>' + element.name + "</button>";
//         return click ;
//     });
//     console.log(newArr);
//task-10..<p class='id101'>Mark</p> <p class='id105'>Steve</p> <p class='id78'>James</p>
// const arrJson = [{"id" : 101, "name" : "Mark"},
// {"id" : 105, "name" : "Steve"},
// {"id" : 78, "name" : "James"}];
//  let str= arrJson.map(function (element) { 
//        let p1= '<p class= ' + '\'id' +  element.id + '\''+  '>' + element.name + "</p>";
//        return p1;
//   });
//   console.log(str);
// using spaces
//   let str1 ='\'Geeks \"FOR\" Geeks\'';
//   console.log(str1)
//Reduce method...
// const nums = [2,3,4,5];
// let sum = nums.reduce(function(acc, curr){
//     //console.log(acc, curr)
//     return acc * curr;
// }) ;
// console.log(sum);
//task-16a) compute the sum of ages
//b) Countthe number of persons who are more than 27 years of age
//c) Compute the youngest person
//d) Compute the oldest person
//e) Count the number of people whose name starts with 'M'
//1.
// const redJson = [{"name" : "Mark", "age" : 23},
//                  {"name" : "Steve", "age" : 28},
//                 {"name" : "Mary", "age" : 25},
//                  {"name" : "Bill", "age" : 34}];
// let computeOldest = redJson.reduce(function (acc, curr){
//     if(curr>acc)
//     return acc;
//     else
//     return curr;
// });
// console.log(computeAge);
//2.
// const redJson = [{"name" : "Mark", "age" : 23},
//                  {"name" : "Steve", "age" : 28},
//                 {"name" : "Mary", "age" : 25},
//                  {"name" : "Bill", "age" : 34}];
// let computeYoungest = redJson.reduce(function (acc, curr){
//    if(curr.length<acc.length)
//    return curr;
//    else
//    return acc;
// });
// console.log(computeYoungest);
//3.by using forEach method.
// const redJson = [{"name" : "Mark", "age" : 20},
//                  {"name" : "Steve", "age" : 30},
//                 {"name" : "Mary", "age" : 25},
//                  {"name" : "Bill", "age" : 40}];
// let totalAge=0;
//  redJson.forEach(redJson=>{
//   totalAge += redJson.age;
//  })
//  console.log(totalAge);
// const redJson = [{"name" : "Mark", "age" : 20},
//                  {"name" : "Steve", "age" : 30},
//                 {"name" : "Mary", "age" : 25},
//                  {"name" : "Bill", "age" : 40}];
//  let totalAge = redJson.reduce((total, redJson)=>{
//    return total + redJson.age;
//  },0)
//  console.log(totalAge);
var a = {
  y: 10
};
a.x = a;
console.log(JSON.stringify(a));