function titleToNumber(columnTitle: string): number {
	let result: number = 0;

	for (let i = 0; i < columnTitle.length; i++) {
		result = result * 26 + (columnTitle.charCodeAt(i) - 64);
	}

	return result;
}

console.log(titleToNumber("A")); //1
console.log(titleToNumber("AB")); //28
