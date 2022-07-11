// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

//Works and passes test
function opposite(number) {
  //your code here
  const negatedNumber = number * (-number) * number
  return negatedNumber

}


//Works and passes both test and attempt
function opposite2(number) {
  //your code here
  const negatedNumber = number - (number * 2)
  return negatedNumber

}