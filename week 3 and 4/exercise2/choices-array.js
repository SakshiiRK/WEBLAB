const choices = ['blue', 'green', 'purple'];

choices.forEach((choice, index) => {
  const suffix = (n) => {
    if (n === 1) return "st";
    if (n === 2) return "nd";
    if (n === 3) return "rd";
    return "th";
  };
  console.log(`My ${index + 1}${suffix(index + 1)} choice is ${choice}.`);
});