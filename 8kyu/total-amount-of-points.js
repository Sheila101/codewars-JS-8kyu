// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  // your code here
  //Total points to store the accumilated points 
  let totalPoints = 0
//loop through the array to get the points
for(let i = 0; i < games.length; i++){
  //Assign thr scores and convert string to numbers

  let xScore = Number(games[i].charAt(0))
   let yScore = Number(games[i].charAt(2))

   //Add points, depending on the value of xScore compared to yScore

  if(xScore > yScore){
    totalPoints += 3
  }else if(xScore < yScore){
    totalPoints += 0
  }else if(xScore === yScore) {
    totalPoints += 1
  }
}
return totalPoints

}


//Psudo code
//1) convert the strings to numbers 
//2) save each number to x or y 
