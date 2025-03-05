Object.defineProperty(Person.prototype, 'name', {
	get: function () {
		return this.getName();
	},
	set: function (fullName) {
		const [first, last] = fullName.split(' ');
		this.firstName = first;
		this.lastName = last;
	},
});
