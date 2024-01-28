function twoSum(nums: number[], target: number): number[] {
	const map: { [key: number]: number } = {};

	for (let i = 0; i < nums.length; i++) {
		const difference = target - nums[i];
		if (map[difference] !== undefined) {
			return [map[difference], i];
		}
		map[nums[i]] = i;
	}
	return [];
}
