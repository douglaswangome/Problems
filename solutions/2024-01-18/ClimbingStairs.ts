function climbStairs(n: number): number {
	let n1: number = 0;
	let n2: number = 1;
	let nextTerm: number;

	for (let i: number = 1; i <= n; i++) {
		nextTerm = n1 + n2;
		n1 = n2;
		n2 = nextTerm;
	}

	return n2;
}

console.log(climbStairs(5));
