function generateFibonacci(n) {
  const result = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  return result;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function filterPrimes(arr) {
  return arr.filter(isPrime);
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function calculateHCF(arr) {
  return arr.reduce((a, b) => gcd(a, b));
}

function calculateLCM(arr) {
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

module.exports = {
  generateFibonacci,
  filterPrimes,
  calculateLCM,
  calculateHCF
};