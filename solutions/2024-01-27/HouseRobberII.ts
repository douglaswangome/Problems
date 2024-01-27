function robII(nums: number[]): number {
	function helper(nums: number[]): number {
		let rob1: number = 0;
		let rob2: number = 0;

		for (const num of nums) {
			const temp: number = Math.max(num + rob1, rob2);
			rob1 = rob2;
			rob2 = temp;
		}

		return rob2;
	}

	return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, -1)));
}

console.log(robII([2, 3, 2])); // 3
console.log(robII([1, 2, 3, 1])); // 4
