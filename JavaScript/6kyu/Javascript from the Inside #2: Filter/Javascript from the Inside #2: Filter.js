Array.prototype.filter = function (callback, thisArg) {
	let result = [];
	let length = this.length;
	for (let i = 0; i < length; i++) {
		if (i in this) {
			if (callback.call(thisArg, this[i], i, this)) {
				result.push(this[i]);
			}
		}
	}
	return result;
};
