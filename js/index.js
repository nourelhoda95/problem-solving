// 1)Filtering an Array
// Problem: Write a function that takes an array of numbers
// and returns a new array containing only the even
// numbers.


// function filterEvenNumbers(arr) {
//   const evenNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumbers.push(arr[i]);
//     }
//   }
//   return evenNumbers;
// }

// let inputArray = [1, 2, 3, 4, 5, 6 ,44,23,78,25,32];
// let evenNumbers = filterEvenNumbers(inputArray);
// console.log(evenNumbers); 






// 2 Find the Largest Number
// Problem: Write a function that takes an array of numbers
// and returns the largest number in the array.



// function findLargestNumber(arr) {
//   let largestNumber = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//       largestNumber = arr[i];
//     }
//   }
//   return largestNumber;
// }

// let inputArray = [3, 1, 4, 2, 5 ,87,46,110,260];
// let largestNumber = findLargestNumber(inputArray);
// console.log(largestNumber); 





// 3 Reverse a String
// Problem: Write a function that takes a string as input and
// returns the same string but reversed.

// function reverseString(str) {
//   let reversedStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//     return str.split('').reverse().join('');
//   }
  
//   return reversedStr;
  
// }

// let inputString = 'nour';
// let reversedString = reverseString(inputString);
// console.log(reversedString); 




// 4 Remove Duplicates
// Problem: Write a function that takes an array of numbers
// and returns a new array without duplicate numbers.



// function removeDuplicates(arr) {
//   const uniqueNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueNumbers.includes(arr[i])) {
//       uniqueNumbers.push(arr[i]);
//     }
//     return [...new Set(arr)];
//   }
//   return uniqueNumbers;
// }

// let inputArray = [1, 2, 2, 3, 4, 4, 5 ,52,85,52,95,105,1];
// let uniqueNumbers = removeDuplicates(inputArray);
// console.log(uniqueNumbers); 


