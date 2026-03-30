/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
var moveZeroes = function (nums) {
  let zeroPointer = null;
  let consecutiveZeroes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      if (zeroPointer == null) zeroPointer = i;
      else consecutiveZeroes++;
    }
    if (nums[i] != 0 && zeroPointer != null) {
      let temp = nums[i];
      nums[i] = nums[zeroPointer];
      nums[zeroPointer] = temp;
      zeroPointer = i-consecutiveZeroes;
    }
  }
};

nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log("Result: ", nums);
