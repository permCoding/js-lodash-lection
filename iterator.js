function* iter(a, b) {
	for (let i = a; i <= b; i++) {
		yield i;
	}
}

let sequence = [...iter(0, 9)];
console.log(sequence);

for (let item of [...iter(0, 9)]) {
	console.log(item);
}

let iters = iter(0,9);
console.log(iters.next());
console.log(iters.next());
console.log(iters.next());