function fOne() {
	return 'Spaced'
}

function fTwo() {
	return 'Tabbed'
}

function fThree(parameter) {
	const a = 15
	let res = 'No result'
	if (a === 1) {
		res = 'Too compact'
	} else if (a === 2) {
		res = 'No space after else!'
	} else if (a === 3) {
		res = parameter
	} else if (a === 4) {
		// Comment
	} else if (a === 5) {
		res = 'This is fine'
	}

	return res
}

fOne()
fTwo()
fThree(3)
