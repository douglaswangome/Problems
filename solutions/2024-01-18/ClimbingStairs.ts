function climbStairs(n: number, memo: { [key: number]: number } = {}): number {
	// After learning dynamic programming, I decided to try it out here
	if (memo.hasOwnProperty(n)) {
		return memo[n];
	}
	if (n <= 3) {
		return n;
	}
	memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
	return memo[n];
}

console.log(climbStairs(50));
