function plusOne(digits: number[]): number[] {
	// create a carry variable which will be used to carry the 1
	let carry = 1;
	// iterate backwards
	for (let i = digits.length - 1; i >= 0; i--) {
		digits[i] += carry;
		// if the digit is greater than 9, set it to 0 and carry the 1
		if (digits[i] > 9) {
			digits[i] = 0;
			carry = 1;
		} else {
			// if the digit is less than 9, set carry to 0 and return the digits
			carry = 0;
		}
	}
	// if carry is still 1, unshift 1 to the front of the array
	if (carry) {
		digits.unshift(1);
	}
	return digits;
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]));
