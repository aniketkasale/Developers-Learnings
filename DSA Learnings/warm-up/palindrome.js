function isPalindrome(num) {
  let rev = 0;
  const originalNum = num;

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return rev == originalNum;
}

isPalindrome(121)