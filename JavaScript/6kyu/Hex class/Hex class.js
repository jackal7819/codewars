class Hex {
	constructor(value) {
		this.value = value;
	}

	valueOf() {
		return this.value;
	}

	toString() {
		return '0x' + this.value.toString(16).toUpperCase();
	}

	toJSON() {
		return this.toString();
	}

	plus(other) {
		return new Hex(this + other);
	}

	minus(other) {
		return new Hex(this - other);
	}

	static parse(string) {
		return Number.parseInt(string, 16);
	}
}
