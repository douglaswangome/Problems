function alternateDigitSum(n: number): number {
	let result: number = 0;

	let sign: number = 1;
	const nString = n.toString();

	for (let i: number = 0; i < nString.length; i++) {
		result += parseInt(nString[i]) * sign;
		sign *= -1;
	}

	return result;
}

console.log(alternateDigitSum(521));
