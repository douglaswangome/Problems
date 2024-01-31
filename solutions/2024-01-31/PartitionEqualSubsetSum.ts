function canPartition(nums: number[]): boolean {
	const sum: number = nums.reduce((a, b) => a + b, 0);

	if (sum % 2 !== 0) {
		return false;
	}

	let set: Set<number> = new Set();
	set.add(0);

	const target: number = sum / 2;

	for (let i = nums.length - 1; i >= 0; i--) {
		const nextSet: Set<number> = new Set();
		for (const num of set) {
			if (num + nums[i] === target) {
				return true;
			}
			nextSet.add(num + nums[i]);
			nextSet.add(num);
		}
		set = nextSet;
	}

	return set.has(target);
}

console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5])); // false
console.log(canPartition([3, 3, 3, 4, 5])); // true
