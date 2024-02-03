function majorityElement(nums: number[]): number {
	const map: { [key: number]: number } = {};
	const half = nums.length / 2;

	for (const num of nums) {
		if (map[num] === undefined) {
			map[num] = 1;
		} else {
			map[num]++;
		}

		if (map[num] > half) {
			return num;
		}
	}

	return -1;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
