//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   let positiveNums = arr.forEach(num => {
//     let sum = 0
//     if(num >= 0){
//       sum+=num
//     }else {
//       return 0
//     }
//   })
  
// }


//Solutions
function positiveSum(arr) {
  let sum = 0;
 for(let i = 0; i<arr.length; i++){
    if(arr[i] > 0){
      sum+=arr[i] 
    }
  }
return sum
}

// function positiveSum(arr) {
//  //Filter the positive numbers 
//  let positiveNums = arr.filter(num => num > 0)
//  //Add all the numbers into one digit
//  let sum = positiveNums.reduce((sum, current) => {
//   sum + current, 0
//  })

//  return sum
// }