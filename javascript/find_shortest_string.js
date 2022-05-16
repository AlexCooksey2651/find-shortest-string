function findShortestString(arr) {
  let shortestWord = arr[0];
  for (const word of arr) {
    if (word.length < shortestWord.length) {
      shortestWord = word
    }
  }
  return shortestWord
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// OWN WORDS: Take an array of strings, identify string with shortest length and return that string

// create shortest word variable, don't assign yet;
// go through array and if length of word is shorter than current shortest word, assign to variable; otherwise move on
// at end of loop, return shortest word
