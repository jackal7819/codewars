function Event() {
	const handlers = [];

	this.subscribe = function (fn) {
		handlers.push(fn);
	};

	this.unsubscribe = function (fn) {
		const index = handlers.indexOf(fn);
		if (index !== -1) {
			handlers.splice(index, 1);
		}
	};

	this.emit = function (...args) {
		handlers.forEach((fn) => fn(...args));
	};
}
