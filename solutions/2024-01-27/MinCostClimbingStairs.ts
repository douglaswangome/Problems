function minCostClimbingStairs(cost: number[]): number {
	cost.push(0);

	for (let i: number = cost.length - 3; i >= 0; i--) {
		cost[i] += Math.min(cost[i + 1], cost[i + 2]);
	}

	return Math.min(cost[0], cost[1]);
}

console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
