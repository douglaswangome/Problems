function singleNumber(nums: number[]): number {
	if (nums.length === 1) {
		return nums[0];
	}

	const map = new Map<number, number>();

	for (let num of nums) {
		if (!map.has(num)) {
			map.set(num, 1);
		} else {
			map.set(num, map.get(num)! + 1);
		}
	}

	for (const [key, value] of map) {
		if (value === 1) {
			return key;
		}
	}

	return 0;
}

console.log(singleNumber([2, 2, 1]));
