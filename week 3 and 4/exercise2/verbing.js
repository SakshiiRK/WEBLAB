function verbing(str) {
  if (str.length >= 3) {
    return str.endsWith("ing") ? str + "ly" : str + "ing";
  }
  return str;
}