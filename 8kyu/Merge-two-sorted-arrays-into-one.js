//Instructions - Merge two sorted arrays into one

//You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

//My solution

function mergeArrays(arr1, arr2) {
  //first sort the indivdual arrays 
  //arr1.compareTheValues()
  //arr2.compareTheValues() 
  
  //If statement to check if array is empty
  if(arr1.length === 0 && arr2.length === 0){
    return []
  } else{
  //Merge the values
  let combinedArray = arr1.concat(arr2)
  combinedArray.sort((a,b) => a-b)

  let uniqueValues = []
  //Using forEach() to iterate over the elemnets and push them into the new array if it doesn't exist 
  combinedArray.forEach(element => {
    if(!uniqueValues.includes(element)){
      uniqueValues.push(element)
    }
  })
  return uniqueValues
}
  }
//To sort the indivdual arrays 
// function compareTheValues(a, b){
//   if(a > b) return 1; //If the first value is greater than the second value
//   if(a < b) return -1; //If the second value is less than the second value 
//   if (a == b) return 0; //If the first and secodn value are equal
  
// }

