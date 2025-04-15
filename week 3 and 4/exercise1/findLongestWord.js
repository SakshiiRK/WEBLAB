function findLongestWord(words) {
  return Math.max(...words.map(word => word.length));
}
const words = ['hello', 'world', 'JavaScript', 'is', 'awesome'];
const longestWordLength = findLongestWord(words);
console.log(longestWordLength);