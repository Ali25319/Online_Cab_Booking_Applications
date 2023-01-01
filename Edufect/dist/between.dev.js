"use strict";

function getEvenNumbers() {
  var arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 42, 11, 14, 13, 17];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      document.writeln(arr[i] + "<br />");
    }
  }
}

getEvenNumbers();
var arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 42, 11, 14, 13, 17];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}