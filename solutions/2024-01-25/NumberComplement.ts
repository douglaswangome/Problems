function findComplement(num: number): number {
	const bin: string = num.toString(2);
	let result = "";

	for (let i: number = 0; i < bin.length; i++) {
		if (bin[i] === "1") {
			result += "0";
		} else {
			result += "1";
		}
	}

	return parseInt(result, 2);
}

console.log(findComplement(5)); // 2
console.log(findComplement(1)); // 0
