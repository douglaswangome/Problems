function numDecodings(s: string): number {
	const dp: { [key: number]: number } = { [s.length]: 1 };

	function helper(i: number): number {
		if (dp[i] !== undefined) {
			return dp[i];
		}
		if (s[i] === "0") {
			return 0;
		}

		let result: number = helper(i + 1);
		if (
			i + 1 < s.length &&
			(s[i] === "1" || (s[i] === "2" && s[i + 1] < "7"))
		) {
			result += helper(i + 2);
		}

		dp[i] = result;
		return result;
	}

	return helper(0);
}

console.log(numDecodings("12")); // 2
