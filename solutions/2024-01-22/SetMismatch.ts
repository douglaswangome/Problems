function findErrorNums(nums: number[]): number[] {
	const set = new Set<number>();
	let result: number[] = [];
	let actualSum: number = 0;
	const expectedSum = (nums.length * (nums.length + 1)) / 2;

	for (let num of nums) {
		if (set.has(num)) {
			result.push(num);
		}
		set.add(num);
		actualSum += num;
	}
	result.push(result[0] + expectedSum - actualSum);

	return result;
}

console.log(findErrorNums([3, 2, 2]));
