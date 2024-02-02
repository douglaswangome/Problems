function groupAnagrams(strs: string[]): string[][] {
	const result: { [key: string]: string[] } = {};

	for (const str of strs) {
		let count: number[] = new Array(26).fill(0);

		for (const char of str) {
			count[char.charCodeAt(0) - 97]++;
		}

		const key = count.join("#"); // # is used to separate the count of each character, won't be present in the string
		if (!result[key]) {
			result[key] = [];
		}
		result[key].push(str);
	}

	return Object.values(result);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
