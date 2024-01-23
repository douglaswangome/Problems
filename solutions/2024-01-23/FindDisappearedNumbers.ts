function findDisappearedNumbers(nums: number[]): number[] {
	const result: number[] = [];
	const set: Set<number> = new Set(nums);

	for (let i = 1; i <= nums.length; i++) {
		if (!set.has(i)) {
			result.push(i);
		}
	}

	return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
console.log(findDisappearedNumbers([1, 1])); // [2]
