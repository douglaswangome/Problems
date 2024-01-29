function longestPalindrome(s: string): string {
	let result: string = "";
	let resultLength: number = 0;

	for (let i = 0; i < s.length; i++) {
		// check for odd length palindromes
		let left: number = i;
		let right: number = i;
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			console.log(s[left], s[right]);
			if (right - left + 1 > resultLength) {
				result = s.substring(left, right + 1);
				resultLength = right - left + 1;
			}
			left--;
			right++;
		}

		// check for even length palindromes
		left = i;
		right = i + 1;
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			if (right - left + 1 > resultLength) {
				result = s.substring(left, right + 1);
				resultLength = right - left + 1;
			}
			left--;
			right++;
		}
	}

	return result;
}

console.log(longestPalindrome("babad")); // "bab", "aba" is also a valid answer.
