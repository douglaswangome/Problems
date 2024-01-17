function lengthOfLastWord(s: string): number {
	const words = s.trim().split(" ");
	return words[words.length - 1].length || 0;
}

console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 5
