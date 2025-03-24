function multiFilter(...filters) {
	return (el) => filters.every((fn) => fn(el));
}
