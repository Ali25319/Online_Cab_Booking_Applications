// function fizzBuzz(num){

//     for(let i=0; i<num; i++){
//     if(i%2===0 && i%3===0){
//         console.log("Fizz Buzz");
//     }
//     else if(i%3===0){
//         console.log("Buzz");
//     }
//     else if(i%2===0){
//         console.log("Fizz");
//     }
//     else{
//         console.log(i);
//     }
//     }
// }
//  fizzBuzz(4);


     var n=10;

    for(let i=1; i<=n; i++){
    if(i%2===0 && i%3===0){
        console.log("Fizz Buzz");
    }
    else if(i%3===0){
        console.log("Buzz");
    }
    else if(i%2===0){
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
}