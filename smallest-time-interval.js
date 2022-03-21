// This week’s question:
// Given a list of times in a 24-hour period,
// return the smallest interval between two times in the list.
// Hint: you can do this in O(n) time!

// Example:
// $ smallestTimeInterval(['01:00', '08:15', '11:30', '13:45', '14:10', '20:05'])
// $ '25 minutes'

const getTimeObject = time => {
  const [hours, minutes] = time.split(":")
  return { hours, minutes }
}

const getInterval = (timeOneStr, timeTwoStr) => {
  const timeOne = getTimeObject(timeOneStr)
  const timeTwo = getTimeObject(timeTwoStr)

  let minutes = timeTwo.minutes - timeOne.minutes
  let hours = timeTwo.hours - timeOne.hours

  if (minutes < 0) {
    minutes += 60
    hours -= 1
  }

  return { hours, minutes }
}

const getMinTimeInterval = (intervalOne, intervalTwo) => {
  if (intervalOne.hours < intervalTwo.hours) {
    return intervalOne
  }
  if (intervalTwo.hours < intervalOne.hours) {
    return intervalTwo
  }
  if (intervalOne.minutes < intervalTwo.minutes) {
    return intervalOne
  }
  return intervalTwo
}

const smallestTimeInterval = arr => {
  let minTimeInteval = { hours: 25, minutes: 61 } // impossibly large given the problem

  for (let i = 0; i < arr.length - 1; i++) {
    const timeOne = arr[i]
    const timeTwo = arr[i + 1]
    const timeInterval = getInterval(timeOne, timeTwo)
    minTimeInteval = getMinTimeInterval(minTimeInteval, timeInterval)
  }

  const { hours, minutes } = minTimeInteval

  if (minTimeInteval.hours) {
    return `${hours} hours, ${minutes} minutes`
  }
  return `${minutes} minutes`
}

console.log(
  smallestTimeInterval(["01:00", "08:15", "11:30", "13:45", "14:10", "20:05"])
)
