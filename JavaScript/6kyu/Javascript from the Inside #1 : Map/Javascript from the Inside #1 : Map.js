Array.prototype.map = function (callback, context) {
	let result = new Array(this.length);

	for (let i = 0; i < this.length; i++) {
		if (this.hasOwnProperty(i)) {
			result[i] = callback.call(context, this[i], i, this);
		}
	}

	return result;
};
