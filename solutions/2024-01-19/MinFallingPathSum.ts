function minFallingPathSum(matrix: number[][]): number {
	let sum: number = 0;
	let row: number;
	let col: number;
	let arr: number[] = [];

	for (row = 0; row <= 0; row++) {
		for (col = 0; col <= 1; col++) {
			arr.push(matrix[row][col]);
		}
	}

	console.log(arr);

	return 21;
}

console.log(
	minFallingPathSum([
		[2, 1, 3],
		[6, 5, 4],
		[7, 8, 9],
	])
); // 13
