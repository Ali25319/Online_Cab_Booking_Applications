//  var x=0;
//  var y=1;

//  function countWords(str){
//     var str1 = x;
//      var str2 = 0;
//       var i= 0;
       

//        while(i<str.length){
//  if (str[i] == " " || str[i] == " \n" || str[i]== "\t")
//  str1 = x;
//   else if (str1== x){
//      str1 = y;

//      ++str2;
//   }
//   i++

//        }
// return str2;
//  }
  //  console.log(countWords(str));

//hoisting  is defual behavier by which
//we can accsee the variable and functions before it is declared .

  //console.log(x);
  //var x= 3;

// const str = "hi hello and hi hello ";
// let words = str.trim().split(' ')
// let uniqueWords = new Set(words) 
// let uniqueArray = [...uniqueWords]
// console.log(uniqueArray) 
// console.log(words.length)

// expected output: Array ["The quick brown fox jumps over the lazy dog."]

// const str = "hello";

//  let count = str.trim().split(" ")
//  let uniqueArray1 = new Set(count);
//  let uniqueWords1 = [...uniqueArray1];
//  console.log(uniqueArray1);
//  console.log(count.length);


// javascript program to remove duplicate character
// from character array and print in sorted
// order

	// function removeDuplicate(str , n)

	// {
	// 	// Create a set using String characters
	// 	// excluding '\0'
	// 	var s = new Set();
		
	// 	// HashSet doesn't allow repetition of elements
	// 	for (var i = 0;i<n;i++)
	// 		s.add(str[i]);

	// 	// Print content of the set
	// 	for (const v of s) {

	// 		console.log(v);
	//    }
	// }
	// var str = "geeksforgeeks";

	// var n = str.length;

	// removeDuplicate(str, n);

	// console.log(removeDuplicate(str))
	// const arr = new Set ([2,3,4,2,4,'hi','hello','hi']);
	 
	//   console.log(arr.size);

// 	//step-1 Make an Array named Arr-
// 	let Arr = [45, 'this',3, false,3, 'this',4, 'hi'];
//     //console.log(Arr);
   
//    //  step-2 convert an array to set using new keyword 
//    let mySet = new Set(Arr);
//    //console.log(mySet);
   
//    //step-3 convert a set into an array
//    let Array1 = Array.from(mySet);
//    console.log(Array1.join(" "));

//  var duplicateArr=[1,2,3,2,3,4,5,6,5];
//   var mySet = new Set(duplicateArr);
//    var removeArr = Array.from(mySet);
//    console.log(removeArr.join(" "))