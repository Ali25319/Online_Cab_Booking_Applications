//square pattern

// let n =5;
// let str = "";

// for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//        str += "*";
//     }
//     str +="\n";
// }
// console.log(str);


//Right-triangle


// let n =5;
// let str = " ";

// for(let i=0; i<=n; i++){
//     for(let j=0; j<n-i; j++){
//        str += " ";
//     }
//     for(let k=0; k<i; k++){
//         str += "*"
//     }
//     str +="\n";
// }
// console.log(str);

//left-triangle

// let n =5;
// let str = "";

// for(let i=0; i<=n; i++){
//     for(let j=0; j<i; j++){
//        str += "*";
//     }
//     str +="\n";
// }
// console.log(str);

//Downward Triangle Star Pattern

// let n =5;
// let str = "";

// for(let i=0; i<=n; i++){
    
//     for(let j=0; j<n-i; j++){
//         str += "*";
//     }
//     str +="\n";
// }
// console.log(str);


// let n = 5;

// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n-i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//hints right angle downwards

// function rightTriangle(n) {
//     for (var i = 0; i <= n; i++) {
//       for (var j = 0; j <= n; j++) {
//         if(j>=i) document.write('*');
//         else document.write(' ');
//       }
//       document.write('<br>');
//     }
//   }
//   rightTriangle(5);

//hints right angle downwards

// let n = 6;
// let string = "";

// for (let i = 1; i <= n ; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k <=n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);



// function isHappynumber(n)
// {
//    if (n == 1 || n == 7)
//        return true;
//    var sum = n, x = n;

//    // this loop executes till the sum of square of
//    // digits obtained is not a single digit number
//    while(sum > 9)
//    {
//        sum = 0;

//        // this loop finds the sum of square of digits
//        while (x > 0)
//        {
//            var d = x % 10;
//            sum += d * d;
//            x /= 10;
//        }
//        if (sum == 1)
//            return true;
//        x = sum;
//    }
//    if(sum == 7)
//        return true;
//    return false;
// // }

// // Driver code
//   var n = 13;
//   if (isHappynumber(n))
//      document.write(n +
//    " is a Happy number");
//   else
//      document.write(n +
//    " is not a Happy number");
 



var topKFrequent = function(nums, k) {
    const map = {};
    
    for (let num of nums) {
        if (!map[num]) map[num] = 0;
        map[num]++
    }
    
    const result = [];
    const mapped = Object.entries(map).sort((a,b) => a[1]-b[1])
    
    while (result.length < k) {
        let largest = mapped.pop()
        result.push(largest[0])
    }
    
    return result
};


console.log(topKFrequent(map))