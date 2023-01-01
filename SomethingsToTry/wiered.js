

// let a = "1";
// console.log(a)


// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

/////////////// ignore above this line ////////////////////

// function main() {
//     var N = parseInt(readLine());
//     if (N % 2 === 0) {
//         if (N >= 2 && N <= 5) {
//             console.log("Not Weird");
//         } else if (N >= 6 && N <= 20) {
//             console.log("Weird");
//         } else if (N > 20) {
//             console.log("Not Weird");
//         }
//     } else if (N % 2 === 1) {
//         console.log("Weird");
//     }
// }
    let n=20;

    for(let i=0; i<=n; i++){
         if(i%2==0){
         if(i>=2 && i<=5){
            console.log("Not Weird");
        }
        
        else if (i>= 6 && i<= 20){
            console.log("weird");
         }
    
        else if(i>20){
            console.log("Not is Weird");
        }
        else if (i%2 == 1){
            console.log("weird");
        }
        console.log(i)
    }

 }