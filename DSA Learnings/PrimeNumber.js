// Check if the number is prime or not

let num = 7;

function checkPrime(num) {
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) {
      return "NOT PRIME";
    } else {
      return "PRIME";
    }
  }
}

let result = checkPrime(num);
console.log(result);
