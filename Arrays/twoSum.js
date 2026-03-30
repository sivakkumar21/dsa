/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

// brute force, 2 loops, match the target and return the indexes
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// hashmap to track the index, take target and subtract each value, store the result in hashmap along with index of the corresponding value
// look up in hashmap for each value to find if it is present

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const lookupMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (lookupMap[nums[i]] != undefined) {
      return [lookupMap[nums[i]], i];
    }
    lookupMap[target - nums[i]] = i;
  }
};

// using 2 pointer and third array

var merge3 = function (nums1, m, nums2, n) {
  let num1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && num1Copy[p1] < nums2[p2])) {
      nums1[i] = num1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
};
