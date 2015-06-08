#!/usr/bin/env node

f(1, 2, 3, "Eeya", "Bin", "Buko")

function f() {
	arr = [].slice.call(arguments)

	console.log("arr: " + arr)
}
