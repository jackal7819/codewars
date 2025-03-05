Object.create = function (prototype, properties) {
	if (typeof prototype !== 'object') throw new TypeError();

	const obj = {};
	Object.setPrototypeOf(obj, prototype);

	if (properties !== undefined) {
		Object.defineProperties(obj, properties);
	}

	return obj;
};
