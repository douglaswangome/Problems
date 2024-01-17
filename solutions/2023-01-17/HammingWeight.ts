function hammingWeight(n: number): number {
	const binary: string = n.toString(2);
	let count: number = 0;

	for (const char of binary) {
		if (char === "1") {
			count++;
		}
	}

	return count;
}

console.log(hammingWeight(0b00000000000000000000000000001011)); // 3
