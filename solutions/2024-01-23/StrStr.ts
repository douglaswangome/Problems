function strStr(haystack: string, needle: string): number {
	if (needle.length === 0) {
		return 0;
	}

	for (let i = 0; i < haystack.length; i++) {
		if (haystack.slice(i, i + needle.length) === needle) {
			return i;
		}
	}

	return -1;
}

console.log(strStr("hello", "ll")); // 2
console.log(strStr("aaaaa", "bba")); // -1
