// Given a string str consisting of lowercase english alphabets, find the number of distinct subsequences of the string

// Note: Answer can be very large, so, return answer modulo 109+7.

// Examples:

// Input: str = "gfg"
// Output: 7
// Explanation:
// The seven distinct subsequences are "", "g", "f", "gf", "fg", "gg" and "gfg" .
// Input: str = "ggg"
// Output: 4
// Explanation:
// The four distinct subsequences are "", "g", "gg", "ggg".
// Constraints:

// 1 ≤ str.size() ≤ 105
// str contains: [a-z].

function countDistinctSubsequences(str) {
  let total = 1;
  const lastOcc = new Map();
  const MOD = 1000000007;

  for (let char of str) {
    let before = total;
    if (lastOcc.has(char)) {
      total = 2 * total - lastOcc.get(char);
    } else total = 2 * total;
    total = (total + MOD) % MOD;
    lastOcc.set(char, before);
  }

  return total;
}

console.log(countDistinctSubsequences("ggg"));
