function memo(fn, cache = new Map()) {
	return function (arg) {
		if (cache.has(arg)) {
			return cache.get(arg);
		}

		const result = fn(arg);
		cache.set(arg, result);
		return result;
	};
}
