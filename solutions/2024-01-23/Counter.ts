function createCounter(n: number): () => number {
	return function () {
		return n++;
	};
}

const counter = createCounter(10);
console.log(counter()); // 10
counter(); // 11
counter(); // 12
