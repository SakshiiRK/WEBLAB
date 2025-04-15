function translate(text) {
  return text.replace(/([^aeiou\s])/gi, '$1o$1');
}