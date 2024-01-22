function combinationSum4(nums: number[], target: number): number {
	const memo: { [key: number]: number } = {};

	function combinations(target: number): number {
		if (target === 0) {
			return 1;
		}

		if (memo[target] !== undefined) {
			return memo[target];
		}

		let count = 0;

		for (let num of nums) {
			const difference = target - num;
			if (difference >= 0) {
				count += combinations(difference);
			}
		}

		memo[target] = count;
		return count;
	}

	return combinations(target);
}

console.log(combinationSum4([1, 2, 3], 4));
