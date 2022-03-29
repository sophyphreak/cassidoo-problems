// This week’s question:
// Given a string that represents items as asterisks (*) and compartment walls as pipes (|),
//  a start index, and an end index, return the number of items in a closed compartment.

// Example:

// let str = '|**|*|*'

// > containedItems(str, 0, 5)
// > 2

// > containedItems(str, 0, 6)
// > 3

// > containedItems(str, 1, 7)
// > 1

// Extra credit: What if you had multiple pairs of start and end indices? You can do it in O(n) time!

const getItemsByEndIndex = str => {
  const itemsByEndIndex = new Array(str.length + 1).fill(0)
  let unrealizedItems = 0
  let itemSum = 0
  let firstPipeFound = false
  for (let i = 1; i <= str.length; i++) {
    const current = str[i - 1]
    if (!firstPipeFound && current !== "|") {
      continue
    }
    if (current !== "|") {
      unrealizedItems += 1
    } else {
      firstPipeFound = true
      itemSum += unrealizedItems
      unrealizedItems = 0
    }
    itemsByEndIndex[i] = itemSum
  }
  return itemsByEndIndex
}

const getItemsByStartIndex = str => {
  const itemsByStartIndex = new Array(str.length).fill(0)
  let unrealizedItems = 0
  let itemSum = 0
  let firstPipeFound = false
  for (let i = str.length - 1; i >= 0; i--) {
    const current = str[i]
    if (!firstPipeFound && current !== "|") {
      continue
    }
    if (current !== "|") {
      unrealizedItems += 1
    } else {
      firstPipeFound = true
      itemSum += unrealizedItems
      unrealizedItems = 0
    }
    itemsByStartIndex[i] = itemSum
  }
  return itemsByStartIndex
}

const containedItems = (str, intervals) => {
  const itemsByEndIndex = getItemsByEndIndex(str)
  const itemsByStartIndex = getItemsByStartIndex(str)
  const results = []
  for (const [startIndex, endIndex] of intervals) {
    results.push(
      Math.min(itemsByStartIndex[startIndex], itemsByEndIndex[endIndex])
    )
  }
  return results
}

console.log(
  containedItems("|**|*|*", [
    [0, 5],
    [0, 6],
    [1, 7],
  ])
)
