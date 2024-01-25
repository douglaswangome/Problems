function evenOddBit(n: number): number[] {
	const bin: string = n.toString(2).split("").reverse().join("");
	let even: number = 0;
	let odd: number = 0;

	for (let i: number = 0; i < bin.length; i++) {
		if (bin[i] === "1") {
			if (i % 2 === 0) {
				even++;
			} else {
				odd++;
			}
		}
	}

	return [even, odd];
}

console.log(evenOddBit(5)); // [0,2]
console.log(evenOddBit(2)); // [0,1]
