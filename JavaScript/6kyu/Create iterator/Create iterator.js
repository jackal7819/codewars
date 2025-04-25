const createIterator = (array) => {
	let currentIndex = 0;
	let finished = false;

	return {
		get index() {
			return currentIndex;
		},
		next() {
			if (finished) {
				return { value: undefined, done: true };
			}

			const value = array[currentIndex];
			currentIndex++;

			if (currentIndex >= array.length) {
				finished = true;
			}

			return { value, done: false };
		},
	};
};
