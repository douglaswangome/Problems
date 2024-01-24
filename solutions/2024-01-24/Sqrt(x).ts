function mySqrt(x: number): number {
	if (x === 0 || x === 1) {
		return x;
	}

	let left: number = 1;
	let right: number = x;
	let result: number = 0;

	while (left <= right) {
		const mid: number = Math.floor((left + right) / 2);
		if (mid * mid === x) {
			return mid;
		} else if (mid * mid < x) {
			left = mid + 1;
			result = mid;
		} else {
			right = mid - 1;
		}
	}

	return result;
}

console.log(mySqrt(4)); //2
console.log(mySqrt(8)); //2
console.log(mySqrt(9)); //3
console.log(mySqrt(0)); //0
