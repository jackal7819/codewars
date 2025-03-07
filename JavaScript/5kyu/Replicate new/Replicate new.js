function nouveau(Constructor, ...args) {
	let instance = Object.create(Constructor.prototype);
	let result = Constructor.apply(instance, args);
	return result === Object(result) ? result : instance;
}
