// Given an array of objects A, and an array of indexes B, reorder the objects in array A with the given indexes in array B.
// Example:
// let a = [C, D, E, F, G, H];
// let b = [3, 0, 4, 1, 2, 5];
// reorder(a, b) // a is now [D, F, G, C, E, H]
//
// O(n) time
// O(1) space

const reorder = (letters, places) => {
  for (let index = 0; index < places.length; index++) {
    while (index !== places[index]) {
      letters = swap(letters, index, places[index]);
      places = swap(places, index, places[index]);
    }
  }
  return letters;
};

const swap = (arr, i, j) => {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

console.log(reorder(["C", "D", "E", "F", "G", "H"], [3, 0, 4, 1, 2, 5])); // [D, F, G, C, E, H]
