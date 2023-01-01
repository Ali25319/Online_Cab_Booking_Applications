//if -else conditions

//1.Add 1 to odd number
//  let n=23;
//   let remainder= n%2;
//   if(remainder ==1){
//     n =n+1;

//   }
//   console.log(n);

//Divisible by 2, 3 and 6

// let num=17;
//  if (num%6==0){
//     console.log("Divided by 6");
//  }
//  else if(num%3==0){
//     console.log("Divided by 3");
//  } 
// else if (num%2==0){
//     console.log("Divided  by 2");
// }
// else{
//     console.log("not divisible by 6,3,2");
// }

//Pattern JKJKJK;

// let n=6;
// let str = " ";
// for (let i=1; i<=n; i++){
//     if (i%2==1){
//         str=str + "J";
//     }
//     else{
//         str= str + "K";
//     }  
// }
// console.log(str);

//Check prime or composite

// let num=6
//  let count=0;
//  for (let i=2; i<num; i++){
//     if (num%i == 0){
//         count ++;
//     }
//  }
//  if (count==0){
//     console.log("Prime")
//  }
//  else{
//     console.log("composite");
//  }

//or 

// let num=20;
//  let count=0;
//  for (let i=2; i<num; i++){
//     if (num%i == 0){
//         count ++;
//     }
// }
//  if (count==0){
// if (num==1){
//     console.log("1 is niether prime or nor composite");
// }
    
//  else {
//     console.log("Prime")
//  }
//  }
//  else {
//     console.log("composite");
//  }
    
////Given a number n. If n is greater than 0, display the message Positive Number otherwise
// display Not a Positive Number in the console

// let n=4;
//  if (n>0){
//     console.log("Positive Number");
//  }
//  else{
//     console.log("Not A Positive Numbers");
//  }
//or

// let n=0;
//  if (n>0){
//     console.log("Positive Number");
//  }
//  else if(n==0){
//     console.log("Not A Positive Numbers");
//  }
//  else{
//     console.log("Negative number");
//  }


//Given a number n. If n is a multiple of 10, display the message Multiple
// of 10, otherwise display Not a Multiple of 10in the console

// let n=120;
// if (n%10==0){
//     console.log("Multiple of 10");
// }
// else{
//     console.log("Not a multiple of 10");
// }

////4--Given 2 numbers m and n. If m is greater than n, display Larger in the console.
// If they are equal display Equal. If m is less than n, display Smaller.


// let n=6;
// let m=5;
// if(m>n){
//     console.log("Larger");
// }
// else if (m<n) {
//     console.log("Smaller");
// }
// // else if (m==n){
//     else{
//     console.log("Equal");
// }

//5---Given n, check which of the numbers from 2 to 5 divide n and display it on the console


// let num=6
//  let count=0;
//  for (let i=2; i<num; i++){
//     if (num%i == 0){
//         count ++;
//     }
//  }
//  if (count==0){
//     console.log("Prime")
//  }
//  else{
//     console.log("composite");
//  }


//task-6--//

// let n= 15;

// for (let i=1; i<=n; i++){

//     if(i%5 == 0){

//     console.log( i + "Hello")
//     }
//  if (i%1 == 0){ 
//     console.log(i + " ")
//     }
// }


//task-7---

// let n=3;
// //let count= " ";
// for (let i=1; i<=n; i++){

// if(i%2==0){
//     console.log( i + ":even")
// }
// else{
//     console.log(i + ":odd")
//   }
// }


//task-8-->

// let n=30;
// for(let i=1; i<=n; i++){
//     if (n%i==0)
//     console.log(i)
// }
// let n=17;
// for (let i=1; i<=n; i++){
//     if (n%i==0){
//         console.log(i)
//     }
// }

//task-9;

// let n=5;
// for(let i=1; i<=n; i++){
//     if(i%2==0){
//    console.log('Square of ' + i + ' = ' + i*i + ': even')
//   }
//   else{
//     console.log('Square of ' + i + ' = ' + i*i + ': odd')
//   }
// }


//task-12...

// let n=3;
// let str = " ";
// for (let i=1; i<=n; i++){
//     if (i%2==1){
//         str=str + "x";
//     }
//     else{
//         str= str + "y";
//     }  
//     console.log(str);
// }



// var n=4;
// var str = " ";
// for(let i=1; i<=n; i++){
//     if (i%3==1){
//         str = str+ "A";
//     }
//     else if (i%3==2){
//         str = str + "B";
//     }
//     else if (i%3==0){
//         str = str + "C";
//     }
// }
// console.log(str)


///task-10---

// let n=90;
// if(n>=75){
//     console.log("Good");
// }
// else if (n>=50 && n<=75){
//     console.log("Average");
// }
// else{
//     console.log("poor");
// }


//task-13--
// let n=4;
// let str= " ";
// for(let i=1; i<=n; i++){
//     if (i%3==1){
//         str = str + "A";
//     }
//     else if(i%3==2){
//         str=str + "B";
//     }
//     else {
//         str = str + "C";
//     }
// }
// console.log(str);

//task-14--
//  let n=6;
//  let str="" ;
//  for (let i=1; i<=n; i++){
//     if(i%3==1){
//         str =str +"P"+ i;
//     }
//     else if (i%3==2){
//         str= str + "Q" + i;
//     }
//     else{
//         str= str +"R"+i;
//     }
//  }
//  console.log(str);

//task15
// let n=1;
// let str= "";
// for(let i=1; i<=n; i++){
//     if (i%2==1){
//         str= str + i;

//     }
//     else{
//         str= str + "#";
//     }
// } 
// console.log(str);

// task16--

// let n=2;
// let str= "";
// for(let i=1; i<=n; i++){
//     if (i%2==1){
//         str= str + "-" + i;

//     }
//     else{
//         str= str + "+" +i;
//     }
// } 
// console.log(str);

//task-17---

// let n=5;
// let str="";
// //let count=1;
// let a=0;
// for (let i=1; i<=n; i++){
//     if (i%2==0){
//         str += "+" +i;
//         a += i;
//     }
//     else{
//         str += "-"+i;
//         a -= i;
//     }
// }
// console.log(str +  " =" +a)
// let n=6;
// let str='';
// let sum='';
// for(let i=1; i<=n; i++){
//     if (i%2==0){
//         str = str + '+' +i;
//         sum += i; 
//     }
//     else{
//         str = str + '-' + i;
//         sum -= i;
//     }
// }
// console.log(str + "=" + sum);


//atsk-18


// let n=7;
// let str=' ';
// for(let i=1; i<=n; i++){
//     if(i%3==0){
//         str =  str + "X";
//     }
//     else{
//         str = str + i;
//     }
// }
// console.log(str);

// let n=7;
// let ans=[]
// for (let i=n; i>=1; i--){
//     ans.push(i)
// }
//     console.log(ans.join(''));


// task89#4

// var n=7;
// var str =" ";
// for (var i=n; i>=1; i--){
//     if (i%3==0){
//         str = str + "X";
//     }
//     else{
//         str = str + i;
//     }
   
// } 
// console.log(str)

// Reverse Loops

// let str = ""
// for (let i=11;i>=1; i--){
//     str =str + i;
// }
// console.log(str)

//


//task-19

// var n = 9;
//         var s = ""
//         var a = ""
//         var count = 1
//         for(var i = 1; i <= n; i++) {
//             if(n % i == 0) {
//                 s += i + "#"
//             } else {
//                 a += i + "#"
//             }
//         }
//         console.log("Divide: " + s)
//         console.log("Not Divide: " + a)

//task-19..
// let n=9;
// let str=''
// let a= ''
// for (let i=1; i<=n; i++){
//     if(n%i==0){
//         str= str + i + "#";
//     }
//     else{
//         a= a + i + "#";
//     }
// }
// console.log("Divide : " + str)
// console.log("Not Divide :" + a)


//task-20--


// var n = 9999;
//         n += ""
//         var s = 0
        
//         for(var i = 0; i < n.length; i++) {
//             s += +n[i]
//         }
//         console.log(s)

// let n=1234;
//    n += " ";
    
// let num = 0;
// for (let i =0; i<n.length; i++){
//     num += +n[i]
   
// }
// console.log(num)

