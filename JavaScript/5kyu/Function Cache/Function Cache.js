function cache(fn) {
	const storedResults = {};

	return function () {
		const key = JSON.stringify(arguments);

		if (storedResults.hasOwnProperty(key)) {
			return storedResults[key];
		}

		const result = fn.apply(this, arguments);
		storedResults[key] = result;

		return result;
	};
}
