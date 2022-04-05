// Given two strings n and m, return true if they are equal when both are entered into text editors.
//  But: a # means a backspace character (deleting backwards), and a % means a delete character (deleting forwards).

// Example:

// > equalWithDeletions("a##x", "#a#x")
// > true      // both strings become "x"

// > equalWithDeletions("fi##f%%%th %%year #time###", "fifth year time")
// > false     // the first string becomes "fart"

const executeDeletions = str => {
  let withBackspaceDeletions = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      withBackspaceDeletions = withBackspaceDeletions.slice(
        0,
        withBackspaceDeletions.length - 1
      )
      continue
    }
    withBackspaceDeletions += str[i]
  }
  let withDeletions = ""
  for (let i = withBackspaceDeletions.length - 1; i >= 0; i--) {
    if (withBackspaceDeletions[i] === "%") {
      withDeletions = withDeletions.slice(1, withDeletions.length)
      continue
    }
    withDeletions = withBackspaceDeletions[i] + withDeletions
  }
  return withDeletions
}

const equalWithDeletions = (...args) => {
  const withDeletions = []
  withDeletions.push(executeDeletions(args[0]))
  withDeletions.push(executeDeletions(args[1]))
  return withDeletions[0] === withDeletions[1]
}

console.log(equalWithDeletions("a##x", "#a#x"))
console.log(equalWithDeletions("fi##f%%%th %%year #time###", "fifth year time"))
