function fixStart(str) {
  const firstChar = str[0];
  const rest = str.slice(1).replaceAll(firstChar, '*');
  return firstChar + rest;
}