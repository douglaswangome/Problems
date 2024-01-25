function isPalindrome(s: string): boolean {
	const str: string = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
	const reversed: string = str.split("").reverse().join("");

	return str === reversed;
}
