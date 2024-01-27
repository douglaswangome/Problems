function rob(nums: number[]): number {
	let rob1: number = 0;
	let rob2: number = 0;

	for (const num of nums) {
		const temp: number = Math.max(num + rob1, rob2);
		rob1 = rob2;
		rob2 = temp;
	}

	return rob2;
}

console.log(rob([1, 2, 3, 1])); // 4
