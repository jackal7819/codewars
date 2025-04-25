/**
 * Constructor DependencyInjector
 * @param {Object} dependency - object with dependencies
 */
var DI = function (dependency) {
	this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
	const args = func
		.toString()
		.match(/^function\s*\(([^)]*)\)/)[1]
		.split(',')
		.map((arg) => arg.trim())
		.filter((arg) => arg.length > 0);

	const resolvedDeps = args.map((name) => this.dependency[name]);
	return function () {
		return func.apply(this, resolvedDeps);
	};
};
