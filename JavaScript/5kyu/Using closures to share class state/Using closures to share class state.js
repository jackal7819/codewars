var Cat = (function () {
	let totalWeight = 0;
	let catCount = 0;

	return class Cat {
		constructor(name, weight) {
			if (!name || !weight) {
				throw new Error('Both name and weight must be provided');
			}

			this.name = name;
			totalWeight += weight;
			catCount++;

			let _weight = weight;

			Object.defineProperty(this, 'weight', {
				get: function () {
					return _weight;
				},
				set: function (newWeight) {
					totalWeight += newWeight - _weight;
					_weight = newWeight;
				},
			});
		}

		static averageWeight() {
			return catCount === 0 ? 0 : totalWeight / catCount;
		}
	};
})();
