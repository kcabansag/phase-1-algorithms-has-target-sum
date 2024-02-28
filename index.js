function hasTargetSum(array, target) {
  // Write your algorithm her
  for (let i = 0; i < array.length; i++) {
   let firstNumber = array[i]
 
    for (let j = i + 1; j < array.length; j++) {
      
      let lastNumber = array[j]
      let sum = firstNumber + lastNumber
        if (sum === target) {
            return true;
        }
    }
}
return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
1. use to for loop
    a. first for loop is to iterate through the array
    b. second for loop is to iterate through the array without the number you are going to compare to

2. create variable for array[i] and array[j]
3. create another variable that
  

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
