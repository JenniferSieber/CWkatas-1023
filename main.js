// www.codewars.com
// KATA 1 7kyu
const isFlush = (cards) => {
  let suit = cards[0].slice([-1]);
  let result;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].slice(-1) !== suit) {
      result = false;
      return result;
    } else {
      result = true;
    }
  }
  return result;
};

console.log(isFlush(["AS", "3S", "9S", "KS", "4S"]));
console.log(isFlush(["AD", "4S", "7H", "KS", "10S"]));

// KATA 2 7kyu
const transposeTwoStrings = (arr) => {
  let newArr = [];
  let maxLen = Math.max(arr[0].length, arr[1].length);
  for (let i = 0; i < maxLen; i++) {
    newArr.push(`${arr[0][i] || " "} ${arr[1][i] || " "}`);
  }
  return newArr.join("\n");
};

console.log(transposeTwoStrings(["Hello", "World"]));

// KATA 3 8kyu
const stringToArray = (string) => string.split(" ");

console.log(stringToArray("I love strings and arrays."));
