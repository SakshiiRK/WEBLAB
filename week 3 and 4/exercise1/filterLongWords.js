function filterLongWords(words, i) {
  return words.filter(word => word.length > i);
}

const words = ['hello', 'world', 'JavaScript', 'is', 'awesome'];
const minLength = 5;
const longWords = filterLongWords(words, minLength);
console.log(longWords); 
