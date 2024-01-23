function maxProfit(prices: number[]): number {
	let minPrice: number = prices[0];
	let profit: number = 0;

	for (const price of prices) {
		if (price < minPrice) {
			minPrice = price;
		} else if (price - minPrice > profit) {
			profit = price - minPrice;
		}
	}

	return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
