//Instructions
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//Solution

// function find_average(array) {
//   // your code here
//   let sumOfNums = 0
//   let average = 0; 
//   sumOfNums = array.reduce((accum, currentValue) => {
//     accum+=currentValue, 0
//   })
//   average = average/array.length
//   return average;
// }

function find_average(array) {
  // your code here
  let sumOfNums = 0
  let average = 0; 

 if(array.length !== 0){
   array.forEach(num => {
  sumOfNums+=num
 })
 return sumOfNums/array.length;
 } else {
  return 0
 }
  
}