// Problem Statement:
// You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//Example
// Example 1:
// Input:prices = [7, 1, 5, 3, 6, 4]

// Output:5

// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 – 1 = 5.

function getMaxProfit(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; j++) {
      let tempProfit = prices[j] - prices[i];
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit;
      }
    }
  }
  return maxProfit;
}

const inputArr1 = [7, 1, 5, 3, 6, 4];
const inputArr2 = [7, 6, 4, 3, 1];
console.log(getMaxProfit(inputArr1));

console.log(getMaxProfit(inputArr2));

//brute force
/* take the first element, compare it with other elements, if other element is higer then subtract and get the profit, compare wiht th profit
if the profit is higher then replace the max profit */

// Analysis

/* two loops, time Complexity O(n^2) */

// keep track of minimum price seen so far, and move the pointer to each number to get the profit and compare with max profit

function getMaxProfitPointer(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    let tempProfit = prices[i] - minPrice;

    maxProfit = tempProfit > maxProfit ? tempProfit : maxProfit;

    if (minPrice > prices[i]) {
      minPrice = prices[i];
    }
  }
  return maxProfit;
}

const inputArr3 = [7, 1, 5, 3, 6, 4];
const inputArr4 = [7, 6, 4, 3, 1];
console.log(getMaxProfitPointer(inputArr1));
console.log(getMaxProfitPointer(inputArr2));
