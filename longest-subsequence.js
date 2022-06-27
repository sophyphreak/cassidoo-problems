// Given a string str and a set of words dict, find the longest word in dict that is a subsequence of str.

// Example:

let str = "abppplee"
let dict = ["able", "ale", "apple", "bale", "kangaroo"]

// $ longestWord(str, dict)
// $ 'apple'
// // "able" and "ale" also work, but are shorter than "apple"
// // "bale" has all the right letters, but not in the right order

const longestWord = (str, dict) => {
  let longest = ""
  for (const word of dict) {
    if (longest.length < word.length && isSubstring(str, word)) {
      longest = word
    }
  }
  return longest
}

const isSubstring = (str, sub) => {
  let i = 0
  let j = 0
  while (i < str.length) {
    if (str[i] === sub[j] && j === sub.length - 1) {
      return true
    }
    if (str[i] === sub[j]) {
      i++
      j++
      continue
    }
    i++
  }
  return false
}

for (let i = 0; i < 3; i++) {
  console.assert(isSubstring(str, dict[i]))
}
for (let i = 3; i < dict.length; i++) {
  console.assert(!isSubstring(str, dict[i]))
}
console.assert(longestWord(str, dict) === "apple")
console.log("tests finished")
