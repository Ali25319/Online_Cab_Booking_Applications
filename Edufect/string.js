//let str= 'Javascript';
// console.log(str[2]);
// let len= str.length;
// console.log(len)
// for (let i=0; i<len; i++){
//    // console.log(str[i]);
// console.log(str.charAt(i));
// }

//Substrig is use to find parts of strings

//console.log(str.substring(5,11));
//indexOf--
//  let index1= str.indexOf('a')
//  console.log(index1);
//  let index2=str.indexOf('a' , index1+1);
//  console.log(index2);
//  let index3= str.indexOf('a' , index2+1)
//  console.log(index3)

// let str1= 'JDK';
// let upp= str.toUpperCase();
// console.log(upp);
// let low= str.toLowerCase();
// console.log(low);
//  let comp=(str!=str1);
//  console.log(comp);


//..Zebra....

// let str= 'zebrazzzazazazz';
// let len= str.length;
// let count=0;
// for (let i=0; i<len; i++){
//     if(str[i]=='z'){
//         count++;
//     }
// }
// console.log(count);

//Task-2#5

// let str= "123545";
// let len= str.length;

// for (let i=0; i<len; i++){
//     if (len>=5){
//         console.log("Long");
//     }
//     else{
//         console.log("short");
//     }
// }

//task-3

// let str= 'moozoom';
// let len=str.length;
// let count=0;
// for(let i=0; i<len; i++){
//     if(str[i]=='m'){
//         count++;
//     }
// }
// console.log(count);

//task-4.


// var str = "x+y+xy+4x=7"
// var count =0
// var count1 = 0
// for(var i =0;i<str.length;i++){
//   if(str[i]=='x'){
//     count++
// }
//     if(str[i]=='y'){
//       count1++
    
//   }
// }
// console.log("x="+count)
// console.log("y="+count1)

//task-5..
// var str = "abcaejjhSBbssna"
// for(var i =0;i<str.length;i++){
//   if(str[i]=="a" || str[i]=="b"){
//      console.log(str[i] + " at index:" + i)
//   }
// }

//atsk=6;;

// let str= 'Java';

// console.log(str.substring(1))

// for (let i=0; i<str.length; i++){
//   console.log(str.substring(1))
// }

// function nop(str) {
//   let start_pos = 0;
//   let end_pos = str.length;

//   if (str.length > 0 && str.charAt(0) == 'P') 
//     { 
//       start_pos = 1; 
//     }

//   if (str.length > 1 && str.charAt(str.length - 1) == 'P') 
//   {
//     end_pos--;
//   }

//   return str.substring(start_pos, end_pos);
// }

// let str = 'ax+bz-cz-zz';
//  for (let i=0; i<str.length; i++){

// console.log(str.replaceAll('z' , 'x'));
//  }


//task--8;
//task25
// let str = '++a++b++c';
// let out = " ";
//  let len = str.length;
//  for (let i=0; i<len; i++){
//   let ch= str[i];
//   let prevch = str[i-1];
//   if(ch=='+'){
//     if (prevch=='+'){

//     }
//     else{
//       out= out+ch;

//     }
//   }
//   else{
//     out =out +ch;
//   }
//  }
//  console.log(out);

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
 
///task-21