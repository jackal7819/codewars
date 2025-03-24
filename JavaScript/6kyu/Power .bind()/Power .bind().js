Function.prototype.bind = function (ctx) {
	const originalFunction = this;

	function boundFunction(...args) {
		return originalFunction.apply(boundFunction.context, args);
	}

	boundFunction.context = ctx;
	boundFunction.bind = function (newCtx) {
		return originalFunction.bind(newCtx);
	};

	return boundFunction;
};
