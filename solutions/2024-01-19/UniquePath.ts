function uniquePaths(
	m: number,
	n: number,
	memo: { [key: string]: number } = {}
): number {
	if (m === 0 || n === 0) {
		return 0;
	}
	if (m === 1 && n === 1) {
		return 1;
	}

	if (memo.hasOwnProperty(`${m},${n}`)) {
		return memo[`${m},${n}`];
	}

	memo[`${m},${n}`] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
	return memo[`${m},${n}`];
}

console.log(uniquePaths(3, 3));
