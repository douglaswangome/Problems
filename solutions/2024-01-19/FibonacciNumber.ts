function fib(n: number, memo: { [key: number]: number } = {}): number {
	if (n === 0) {
		return 0;
	}

	if (n <= 2) {
		return 1;
	}

	if (memo.hasOwnProperty(n)) {
		return memo[n];
	}

	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
	return memo[n];
}

console.log(fib(4));
