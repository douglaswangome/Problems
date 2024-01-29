function arrangeCoins(n: number): number {
	return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
}

console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(8)); // 3
