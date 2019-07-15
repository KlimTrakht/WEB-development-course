function countSquare(n) {
  if (!Number.isInteger(n) || n <= 0) {
    return 'Invalid argument!'
  }
  return (2 * Math.pow(n, 2) - 2*n + 1);
}