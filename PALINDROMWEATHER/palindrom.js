

// // var res = []
// //  var str = "aman";
// // for(var i = str.length-1;i>=0;i--){
// //     res.push(str[i])
// //     console.log(res)
// // }
// // for(var i= 0;i<str.length;i++){

// // if(str[i] != res[i]) {
// // console.log("no")
// // return
// // }
// // console.log("yes")
// // break;
// //     }
// //     console.log("yes")







// // // sort check palindrome

// // // var str = "mama"
// // // var rev = str.split("").reverse().join("")

// // // if(rev == str) console.log("yes")
// // // else console.log("no")






// // // #######
// // // check Palindrome "Yes" and "No"

// // // var res = []
// // // str = "mama"
// // // for(var i = str.length-1;i>=0;i--){
// // //     res.push(str[i])
// // // }
// // // for(var i= 0;i<str.length;i++){
// // //     if(str[i] != res[i]){

// // // console.log("No")
// // // return;
// // //     }
// // // }
// // // console.log("Yes")





// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


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


let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};


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


