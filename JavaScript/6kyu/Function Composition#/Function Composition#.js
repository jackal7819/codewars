function compose() {
	const fns = Array.from(arguments);

	return function (x) {
		return fns.reduceRight(function (acc, fn) {
			return fn(acc);
		}, x);
	};
}
