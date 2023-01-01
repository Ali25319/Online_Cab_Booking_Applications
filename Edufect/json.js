//task-2/3
//  let emp = {
//     name: 'Mark',
//     age: 24,
//     email: 'mark@gmail.com',
//     salary: 80000,
//     billid : 45661,
//     amount: 2500
//  }
//  //console.log(emp);
//  //console.log(emp.salary)
//  //console.log(emp ['age'])
//  console.log(emp);
//  emp['amount']=2700,
//  console.log(emp);
//  console.log(emp);
//  emp['age']=25,
//  console.log(emp)

//task-4..
// const sum= {
//     billid: 401,
//     amount: 200,
// }

// const sum1= {
//     billid: 402,
//     amount: 500,
// }
// console.log(sum1['amount'] + sum ['amount']);
// console.log(sum.amount + sum1.amount);

//task-5

// let data ={
// };
// console.log(data)
// data['id'] = 'EMP1223';
// data['email']= 'emp@gmail.com';
// data['company']='EMP Inc';
// console.log(data);

//task-7.1..Create an array of JSON's having the performance of students in the exams. 
//Mark scored 80, 75 and 63 in Maths, English and Science.Bob scored 90,
 //81 and 88 in Maths, English and Science.Julia scored 88, 87 and 89 
//in Maths, English and Science.Anthony scored 60, 64 and 61 in Maths, English and Science.

let student1 = {
name: 'Mark',
Scored: '[80,75,63]',
Subject: '[Math, English, Science]'
}
let student2 = {
    name: 'Bob',
    Scored: '[90,81,88]',
    Subject: '[Math, English, Science]'
}
let student3 = {
    name: 'Julia',
    Scored: '[88,87,89]',
    Subject: '[Math, English, Science]'
}
let student4 = {
    name: 'Anthony',
    Scored: '[60,64,61]',
    Subject: '[Math, English, Science]'
}

let arrStudent=[student1, student2, student3, student4];
//console.log(arrStudent);

let computeSub =  [{name:'Mark', Computers:90},
    {name:'Anthony', Computers:70},
    {name:'Julia', Computers:88},
    {name:'Bob', Computers:81}];

  arrStudent.push(computeSub);
  //console.log(arrStudent);

  function computeScored(compJSON){
    
  }
    