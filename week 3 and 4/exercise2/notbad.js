function notBad(str) {
  const notIndex = str.indexOf("not");
  const badIndex = str.indexOf("bad");

  if (notIndex !== -1 && badIndex > notIndex) {
    return str.slice(0, notIndex) + "good" + str.slice(badIndex + 3);
  }
  return str;
}