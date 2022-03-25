function hasTargetSum(array, target) {
  //write a function that iterates over each element in the array
  for (let i = 0; i < array.length; i++) {
    // find a number that adds up to the target number
    let sum = target - array[i];
    // iterate rest of array
    for (let j = i + 1; j < array.length; j++) {
      // check to see if numbers add up to the target
      if (array[j] === sum) 
        return true
    }
  }
  return false
}
// Write your algorithm here

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/// function should return true if any 2 numbers in the array adds up to the target number. 



/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
console.log(hasTargetSum)

  console.log("Expecting: true");

  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
