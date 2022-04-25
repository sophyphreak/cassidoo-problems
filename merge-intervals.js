// This week’s question:
// Given an array of intervals, merge the overlapping intervals, and return an array of the resulting intervals.

// Example:

// $ mergeIntervals([[1,4],[2,6],[8,10],[15,20]])
// $ [[1,6],[8,10],[15,20]]

// $ mergeIntervals([[1,2],[2,7]])
// $ [[1,7]]

const mergeIntervals = arr => {
  arr.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < arr.length; i++) {
    while (arr[i + 1] != null && arr[i][1] >= arr[i + 1][0]) {
      arr[i][1] = Math.max(arr[i][1], arr[i + 1][1])
      arr.splice(i + 1, 1)
    }
  }
  return arr
}

console.log(
  mergeIntervals([
    [1, 4],
    [2, 6],
    [8, 10],
    [15, 20],
  ])
)
console.log(
  mergeIntervals([
    [1, 2],
    [2, 7],
  ])
)
