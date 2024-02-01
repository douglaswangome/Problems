function productExceptSelf(nums: number[]): number[] {
	const result: number[] = new Array(nums.length).fill(1);

	let left: number = 1;
	for (let i = 0; i < nums.length; i++) {
		result[i] = left;
		left *= nums[i];
	}

	let right: number = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		result[i] *= right;
		right *= nums[i];
	}

	return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
