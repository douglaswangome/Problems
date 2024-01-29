function countSubstrings(s: string): number {
	let count: number = 0;

	for (let i = 0; i < s.length; i++) {
		// check for odd length palindromes
		let left: number = i;
		let right: number = i;
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			count++;
			left--;
			right++;
		}

		// check for even length palindromes
		left = i;
		right = i + 1;
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			count++;
			left--;
			right++;
		}
	}

	return count;
}

console.log(countSubstrings("abc")); // 3
