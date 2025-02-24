function makeClass(...properties) {
	return class {
		constructor(...values) {
			properties.forEach((prop, index) => {
				this[prop] = values[index];
			});
		}
	};
}
