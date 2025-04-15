function randomNumbersAndAverage() {
  const count = parseInt(prompt("How many random numbers?"));
  let numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }
  let avg = numbers.reduce((a, b) => a + b) / count;
  alert(`Numbers: ${numbers.join(', ')}\nAverage: ${avg}`);
}
