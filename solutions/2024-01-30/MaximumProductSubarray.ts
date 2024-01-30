function maxProduct(nums: number[]): number {
	let result: number = Math.max(...nums);
	let max: number = 1;
	let min: number = 1;

	for (const num of nums) {
		if (num === 0) {
			max = 1;
			min = 1;
			continue;
		}

		const temp: number = max * num;
		max = Math.max(max * num, min * num, num);
		min = Math.min(temp, min * num, num);
		result = Math.max(result, max, min);
	}

	return result;
}

console.log(maxProduct([1, 2, -3, 4])); // 4
