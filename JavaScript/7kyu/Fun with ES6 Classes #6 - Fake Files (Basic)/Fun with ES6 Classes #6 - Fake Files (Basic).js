class File {
	constructor(fullName, contents) {
		this._fullName = fullName;
		this._contents = contents;
		this._lineIndex = 0;
		this._charIndex = 0;
	}

	get fullName() {
		return this._fullName;
	}

	get filename() {
		return this._fullName.substring(0, this._fullName.lastIndexOf('.'));
	}

	get extension() {
		return this._fullName.substring(this._fullName.lastIndexOf('.') + 1);
	}

	getContents() {
		return this._contents;
	}

	write(str) {
		if (this._contents.length > 0) {
			this._contents += '\n';
		}
		this._contents += str;
	}

	gets() {
		const lines = this._contents.split('\n');
		return this._lineIndex < lines.length
			? lines[this._lineIndex++]
			: undefined;
	}

	getc() {
		return this._charIndex < this._contents.length
			? this._contents[this._charIndex++]
			: undefined;
	}
}
