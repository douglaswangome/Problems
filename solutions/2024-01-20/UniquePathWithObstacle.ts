function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
	let m: number = obstacleGrid[0].length;
	let n: number = obstacleGrid.length;
	let memo: { [key: string]: number } = {};

	function uniquePaths(
		m: number,
		n: number,
		memo: { [key: string]: number }
	): number {
		if (m === 0 || n === 0 || obstacleGrid[n - 1][m - 1]) {
			return 0;
		}

		if (m === 1 && n === 1) {
			return 1;
		}

		if (obstacleGrid[n - 1][m - 1] === 1 || obstacleGrid[0][0] === 1) {
			console.log("here");
			return 0;
		}

		if (memo.hasOwnProperty(`${m},${n}`)) {
			return memo[`${m},${n}`];
		}

		memo[`${m},${n}`] =
			uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
		return memo[`${m},${n}`];
	}

	return uniquePaths(m, n, memo);
}

console.log(uniquePathsWithObstacles([[1]]));
