
// var str = 'hey you bro welcome to the hoisting';
// console.log(str);

// console.log(str1);
//  var str1 = 'hey you';
  

//  function codeHoisting(){
//        a = 10;
//     let b = 12;
//  }

//  codeHoisting();
//  console.log(a);
//  console.log(b);

 let str;
console.log(str); // undefined
str = 'Mukul Latiyan';

// //function scoped
// function fun(){
//     str2 = 'Mukul Latiyan';
// }
// fun(); // undefined
// console.log(str2);

//function scoped
function fun(){
    var name;
    console.log(name);
    name = 'Mukul Latiyan';
}
fun(); // undefined

function fun(){
    var name = 'Mukul Latiyan';
    console.log(name); // Mukul Latiyan
}
fun();
//  function codeHoist(){
//     a = 10;
//     let b = 50;
// }
// codeHoist();
 
// console.log(a); // 10
// console.log(b); // ReferenceError : b is not defined