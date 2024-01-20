function hammingDistance(x: number, y: number): number {
	const binY = y > x ? [...y.toString(2)] : [...x.toString(2)];
	const binX = y < x ? [...y.toString(2)] : [...x.toString(2)];

	while (binY.length > binX.length) {
		binX.unshift("0");
	}

	let distance: number = 0;

	for (let i: number = 0; i < binY.length; i++) {
		if (binY[i] !== binX[i]) {
			distance++;
		}
	}

	return distance;
}

console.log(hammingDistance(4, 14));
