const prevCache = { 0: 0, 1: 0 }

const prevFibonacci = n => {
  if (n < 0) {
    return -1
  }
  if (n in prevCache) {
    return prevCache[n]
  }

  let index = 0
  let fibResult = fibonacci(index)

  while (true) {
    if (fibResult > n) {
      prevCache[n] = -1
      return -1
    }
    if (fibResult === n) {
      prevCache[n] = fibonacci(index - 1)
      return prevCache[n]
    }
    index++
    fibResult = fibonacci(index)
  }
}

const fibCache = { 1: 1 }

const fibonacci = n => {
  if (n < 1) {
    return 0
  }
  if (n in fibCache) {
    return fibCache[n]
  }
  const result = fibonacci(n - 2) + fibonacci(n - 1)
  fibCache[n] = result
  return result
}

const fibPairs = [
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 5],
  [6, 8],
  [7, 13],
  [8, 21],
  [9, 34],
  [10, 55],
  [11, 89],
  [12, 144],
  [13, 233],
]

for (const pair of fibPairs) {
  const [argument, expected] = pair
  const actual = fibonacci(argument)
  console.assert(actual === expected, { argument, expected, actual })
}

const pairs = [
  [0, 0],
  [1, 0],
  [2, 1],
  [3, 2],
  [4, -1],
  [5, 3],
  [6, -1],
  [7, -1],
  [8, 5],
  [13, 8],
  [21, 13],
  [34, 21],
  [55, 34],
  [89, 55],
  [144, 89],
  [142, -1],
  [145, -1],
]

for (const pair of pairs) {
  const [argument, expected] = pair
  const actual = prevFibonacci(argument)
  console.assert(actual === expected, { argument, expected, actual })
}

console.log("all tests passed")
