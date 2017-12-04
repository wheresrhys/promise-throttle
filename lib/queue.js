'use strict';

class Queue {
	constructor (items) {
		this.items = items || [];
	}

	attachDrecklyInstance (dreckly) {
		this.dreckly = dreckly;
	}

	push (func) {
		this.items.push.apply(this.items, [].slice.call(arguments));
		this.dreckly.run();
	}

	shift () {
		return this.items.shift();
	}

	get length () {
		return this.items.length;
	}

}

module.exports = Queue;
