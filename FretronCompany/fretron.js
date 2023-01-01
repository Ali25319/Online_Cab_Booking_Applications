// let a = 20;
// let b = 10;
// console.log(a+b);

// Function to return commonElements


// Function to return commonElements
function getCommon(arr1, arr2) {
    arr1.sort();                      // Sort both the arrays
    arr2.sort();
    var common = [];                  // Array to contain common elements
  
    var i = 0, j = 0;                 // i points to arr1 and j to arr2
  
    // Break if one of them runs out
    while(i<arr1.length && j<arr2.length) {
      
      if(arr1[i] == arr2[j]) {        // If both are same, add it to result
        common.push(arr1[i]);
        i++;
        j++;
      }
      else if(arr1[i] < arr2[j]) {  // Increment the smaller value so that
        i++;                        // it could be matched with the larger
      }                             // element
      else {
        j++;
      }
    }
    
    return common;
  }
  
  var arr1 = [45, 99, 55, 15, 17, 93, 23];
  var arr2 = [45, 18, 93, 7, 23, 1, 15];
  
  // Get common elements of arr1, arr2
  var commonElements = getCommon(arr1, arr2); // [15, 23, 45, 93]






