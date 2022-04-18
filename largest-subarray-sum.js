// This week’s question is brought to you by Stytch!
// Given an unsorted array of integers and a number n, find the subarray of length n that has the largest sum.

// Example:

// $ largestSubarraySum([3,1,4,1,5,9,2,6], 3)
// $ [9, 2, 6]

const largestSubarraySum = (arr, n) => {
  let currentSum = arr.slice(0, n).reduce((acc, cur) => acc + cur, 0)
  let maxSum = currentSum
  let maxSumStartIndex = 0
  for (let i = 1; i <= arr.length - n; i++) {
    currentSum += arr[i + n - 1]
    currentSum -= arr[i - 1]
    if (currentSum > maxSum) {
      maxSum = currentSum
      maxSumStartIndex = i
    }
  }
  return arr.slice(maxSumStartIndex, maxSumStartIndex + n)
}

console.log(largestSubarraySum([3, 1, 4, 1, 5, 9, 2, 6], 3))
