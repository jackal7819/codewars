function Event() {
	let handlers = [];

	this.subscribe = function (...fns) {
		for (let fn of fns) {
			if (typeof fn === 'function') {
				handlers.push(fn);
			}
		}
	};

	this.unsubscribe = function (...fns) {
		for (let fn of fns) {
			if (typeof fn === 'function') {
				for (let i = handlers.length - 1; i >= 0; i--) {
					if (handlers[i] === fn) {
						handlers.splice(i, 1);
						break;
					}
				}
			}
		}
	};

	this.emit = function (...args) {
		const snapshot = handlers.slice();
		for (let fn of snapshot) {
			fn.apply(this, args);
		}
	};
}
