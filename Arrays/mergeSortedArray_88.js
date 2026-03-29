/*Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// brute force approach
var merge1 = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
};

// Input: nums1 = [1,2,6,0,0,0],
//  nums2 = [2,3,5], n = 3

var merge = function (nums1, m, nums2, n) {
  let num1L = m - 1;
  let num2L = n - 1;
  let right = m + n - 1;

  while (num2L >= 0) {
    if (nums1[num1L] >= nums2[num2L] && num1L > 0) {
      nums1[right] = nums1[num1L];
      num1L--;
    } else {
      nums1[right] = nums2[num2L];
      num2L--;
    }
    right--;
  }
};

((nums1 = [1, 2, 0, 0, 0, 0]), (m = 2), (nums2 = [2, 5, 6]), (n = 3));
// merge(nums1, m, nums2, n);
// console.log(nums1);

//if third array is allowed how to use pointer

var merge2 = function (nums1, m, nums2, n) {
  console.log(nums1, m, n, nums2);

  let result = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < m && p2 < n) {
    if (nums1[p1] < nums2[p2]) {
      result.push(nums1[p1]);
      p1++;
    } else {
      result.push(nums2[p2]);
      p2++;
    }
  }

  while (p1 < m) {
    result.push(nums1[p1]);
    p1++;
  }
  while (p2 < n) {
    result.push(nums2[p2]);
    p2++;
  }

  console.log({ result });
};

merge2(nums1, m, nums2, n);
