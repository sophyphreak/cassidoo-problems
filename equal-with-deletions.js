/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  a = a.toString(2).split("").reverse()
  b = b.toString(2).split("").reverse()
  let aNeg
  let bNeg
  if (a[a.length - 1] === "-") {
    aNeg = true
    a = a.slice(0, a.length - 1)
  }
  if (b[b.length - 1] === "-") {
    bNeg = true
    b = b.slice(0, b.length - 1)
  }
  if (aNeg === bNeg) {
    let sum = []
    let i = 0
    let carryOver = false
    while (i < a.length && i < b.length) {
      // 0 case, no carry over
      if (a[i] === "0" && b[i] === "0" && !carryOver) {
        sum.unshift("0")

        // 1 case, no carry over
      } else if (a[i] === "0" && b[i] === "0" && carryOver) {
        carryOver = false
        sum.unshift("1")
      } else if (a[i] === "1" && b[i] === "0" && !carryOver) {
        sum.unshift("1")
      } else if (a[i] === "0" && b[i] === "1" && !carryOver) {
        sum.unshift("1")

        // 0 case, with carry over
      } else if (a[i] === "1" && b[i] === "1" && !carryOver) {
        carryOver = true
        sum.unshift("0")
      } else if (a[i] === "1" && b[i] === "0" && carryOver) {
        carryOver = true
        sum.unshift("0")
      } else if (a[i] === "0" && b[i] === "1" && carryOver) {
        carryOver = true
        sum.unshift("0")

        // 1 case, with carry over
      } else if (a[i] === "1" && b[i] === "1" && carryOver) {
        carryOver = true
        sum.unshift("1")
      }
      i++
    }
    while (i < a.length) {
      if (a[i] === "0" && !carryOver) {
        sum.unshift("0")
      } else if (a[i] === "1" && !carryOver) {
        sum.unshift("1")
      } else if (a[i] === "0" && carryOver) {
        carryOver = false
        sum.unshift("1")
      } else {
        carryOver = true
        sum.unshift("0")
      }
      i++
    }
    while (i < b.length) {
      if (b[i] === "0" && !carryOver) {
        sum.unshift("0")
      } else if (b[i] === "1" && !carryOver) {
        sum.unshift("1")
      } else if (b[i] === "0" && carryOver) {
        carryOver = false
        sum.unshift("1")
      } else {
        carryOver = true
        sum.unshift("0")
      }
      i++
    }
    if (carryOver) sum.unshift("1")
    sum = parseInt(sum.join(""), 2) * (aNeg && bNeg ? -1 : 1)
    return sum
  }

  // subtraction
  if (parseInt(a.reverse().join(""), 2) < parseInt(b.reverse().join(""), 2)) {
    // make sure smaller number is subtracting
    let temp = a
    a = b
    b = temp
    temp = aNeg
    aNeg = bNeg
    bNeg = temp
  }
  a.reverse()
  b.reverse()
  let i = 0
  let difference = []
  let carryOver = false
  while (i < a.length && i < b.length) {
    // no carry over
    if (a[i] === "0" && b[i] === "0" && !carryOver) {
      // 000
      difference.unshift("0")
    } else if (a[i] === "1" && b[i] === "1" && !carryOver) {
      // 110
      difference.unshift("0")
    } else if (a[i] === "1" && b[i] === "0" && carryOver) {
      // 101
      carryOver = false
      difference.unshift("0")
    } else if (a[i] === "1" && b[i] === "0" && !carryOver) {
      // 100
      difference.unshift("1")

      // with carry over
    } else if (a[i] === "0" && b[i] === "1" && !carryOver) {
      // 010
      carryOver = true
      difference.unshift("1")
    } else if (a[i] === "1" && b[i] === "0" && carryOver) {
      // 101
      carryOver = true
      difference.unshift("1")
    } else if (a[i] === "1" && b[i] === "1" && carryOver) {
      // 111
      carryOver = true
      difference.unshift("1")
    } else if (a[i] === "0" && b[i] === "1" && carryOver) {
      // 011
      carryOver = true
      difference.unshift("0")
    }
    i++
  }
  while (i < a.length) {
    if (a[i] === "0" && !carryOver) {
      difference.unshift("0")
    } else if (a[i] === "1" && !carryOver) {
      difference.unshift("1")
    } else if (a[i] === "0" && carryOver) {
      // impossible
      carryOver = false
      difference.unshift("1")
    } else if (a[i] === "1" && carryOver) {
      difference.unshift("0")
    }
    i++
  }
  difference = parseInt(difference.join(""), 2) * (aNeg ? -1 : 1)
  return difference
}

console.log(getSum(-14, 16))
