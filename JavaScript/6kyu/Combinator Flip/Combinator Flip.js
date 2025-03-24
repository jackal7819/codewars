function flip(fn) {
	return function () {
		return fn.apply(this, Array.from(arguments).reverse());
	};
}
