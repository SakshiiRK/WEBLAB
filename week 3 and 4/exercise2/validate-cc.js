function validateCreditCard(cardNumber) {
  const sanitized = cardNumber.replace(/-/g, '');
  if (!/^d{16}$/.test(sanitized)) {
    return { valid: false, number: cardNumber, error: 'wrong_length' };
  }

  const digits = sanitized.split('').map(Number);
  if (new Set(digits).size < 2) {
    return { valid: false, number: cardNumber, error: 'all_digits_same' };
  }

  if (digits[15] % 2 !== 0) {
    return { valid: false, number: cardNumber, error: 'last_digit_odd' };
  }

  const sum = digits.reduce((a, b) => a + b);
  if (sum <= 16) {
    return { valid: false, number: cardNumber, error: 'sum_less_than_16' };
  }

  return { valid: true, number: cardNumber };
}