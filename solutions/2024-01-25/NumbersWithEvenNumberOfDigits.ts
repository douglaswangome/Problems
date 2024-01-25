function findNumbers(nums: number[]): number {
	let result: number = 0;
	for (let i: number = 0; i < nums.length; i++) {
		if (nums[i].toString().length % 2 === 0) {
			result++;
		}
	}
	return result;
}
