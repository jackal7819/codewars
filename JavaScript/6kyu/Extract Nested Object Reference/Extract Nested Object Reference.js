Object.prototype.hash = function (string) {
	return string.split('.').reduce((acc, key) => acc && acc[key], this);
};
