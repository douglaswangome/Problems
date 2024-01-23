function intersection(nums1: number[], nums2: number[]): number[] {
	const result: number[] = [];
	const set1: Set<number> = new Set(nums1);
	const set2: Set<number> = new Set(nums2);

	for (const num of set1) {
		if (set2.has(num)) {
			result.push(num);
		}
	}

	return result;
}

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
