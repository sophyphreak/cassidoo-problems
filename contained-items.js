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

const containedItems = (str, startIndex, endIndex) => {
  let items = 0
  while (str[startIndex] !== "|" && startIndex < str.length) {
    startIndex++
  }
  while (str[endIndex - 1] !== "|" && endIndex > 0) {
    endIndex--
  }
  for (const char of str.slice(startIndex, endIndex)) {
    if (char === "*") {
      items++
    }
  }
  return items
}

console.log(containedItems("|**|*|*", 0, 5))
console.log(containedItems("|**|*|*", 0, 6))
console.log(containedItems("|**|*|*", 1, 7))
