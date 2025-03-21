function factory(x) {
	return function (arr) {
		return arr.map((element) => element * x);
	};
}
