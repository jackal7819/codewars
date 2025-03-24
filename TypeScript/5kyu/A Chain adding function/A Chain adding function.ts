export default function add(x: number): any {
	function inner(y: number): any {
		return add(x + y);
	}

	inner.valueOf = function (): number {
		return x;
	};

	return inner;
}
