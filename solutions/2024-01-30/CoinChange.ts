function coinChange(coins: number[], amount: number): number {
	const dp: number[] = new Array(amount + 1).fill(amount + 1);
	dp[0] = 0;

	coins.sort((a, b) => a - b);
	for (let i = 1; i <= amount; i++) {
		for (const coin of coins) {
			if (i - coin >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}

	return dp[amount] === amount + 1 ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11)); // 3
