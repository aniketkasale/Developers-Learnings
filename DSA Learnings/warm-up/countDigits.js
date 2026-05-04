function countDigits(n) {
  if (n == 0) return 1;
  if (n < 0) n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  console.log(count);
}

countDigits(0);
countDigits(-191);
countDigits(191);
