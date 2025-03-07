function undoRedo(obj) {
	let history = [];
	let redoStack = [];

	return {
		set(key, value) {
			history.push({
				type: 'set',
				key,
				oldValue: obj[key],
				newValue: value,
			});
			obj[key] = value;
			redoStack = [];
		},

		get(key) {
			return obj[key];
		},

		del(key) {
			if (obj.hasOwnProperty(key)) {
				history.push({ type: 'del', key, oldValue: obj[key] });
				delete obj[key];
				redoStack = [];
			}
		},

		undo() {
			if (!history.length) throw new Error('Nothing to undo');

			const action = history.pop();
			redoStack.push(action);

			if (action.type === 'set') {
				if (action.oldValue === undefined) {
					delete obj[action.key];
				} else {
					obj[action.key] = action.oldValue;
				}
			} else if (action.type === 'del') {
				obj[action.key] = action.oldValue;
			}
		},

		redo() {
			if (!redoStack.length) throw new Error('Nothing to redo');

			const action = redoStack.pop();
			history.push(action);

			if (action.type === 'set') {
				obj[action.key] = action.newValue;
			} else if (action.type === 'del') {
				delete obj[action.key];
			}
		},
	};
}
