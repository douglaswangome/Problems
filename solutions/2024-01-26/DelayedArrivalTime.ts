function findDelayedArrivalTime(
	arrivalTime: number,
	delayedTime: number
): number {
	let delayedArrivalTime: number = arrivalTime + delayedTime;

	if (delayedArrivalTime >= 24) {
		delayedArrivalTime -= 24;
	}

	return delayedArrivalTime;
}
