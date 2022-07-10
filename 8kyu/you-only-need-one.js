// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  // your code here
  // if(a.includes(x)){
  //   return true
  // }

   let foundX = a.includes(x)
  return foundX
}


//this also works 

// function check(a, x) {
//   // your code here
//   let foundX = a.includes(x)
//   if(foundX){
//     return true
//   }else {
//     return false
//   }
// }