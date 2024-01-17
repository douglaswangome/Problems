function uniqueOccurrences(arr: number[]): boolean {
	const map = new Map<number, number>();

	// Loop through the array
	for (const num of arr) {
		// If the map has the number, increment the value
		if (map.has(num)) {
			map.set(num, map.get(num)! + 1);
		} else {
			// Otherwise, set the value to 1
			map.set(num, 1);
		}
	}

	// Create a set of the values and compare the size
	const storage = new Set<number>(map.values());

	return storage.size === map.size;
}

console.log(uniqueOccurrences([0, 0, -2, -1, 4, 8, -3, 9, 6])); // false
