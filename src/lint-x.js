let thing = 5
let stuff = 7

if (thing === stuff) {
	thing += 1
	stuff -= 1
}

for (let i = 0; i < 12; i++) {
	thing = i
}

let longLine = 'flipkfjalkdjflkdsjfkdsa fkdsjfkdsa fsa fkdsajfk dfdsa fds fjkdsfljfnva  faskljgkdsajgjl  gkadsl jgas g  aldskg'

const thisVar = 7
const thatVar = 8

const f1 = (param) => {
	this(param)
}

const f2 = () => {
	f1(4)
}

const f3 = function () {
	f2()
}

if (thisVar === thatVar) {
	f2()
}

if (thisVar === thatVar) {
	f2()
}

if (thisVar === thatVar) {
	f1('s')
} else {
	f1('s')
}

// Make linter happy with usage

longLine += thing
if (longLine === thing) longLine += `ham ${thisVar} ${thatVar}`
f1()
f2()
f3()


// ===================================
// ORIGINAL
/*
if ( thing == stuff ) {
	console.log('k')
}

for(let i=0; i<12; i++) {
	thing = i
}

let this_var = 7
let thatVar = 8

let f1 = ()=>{
	console.log('s')
}

let f2 = () => {
	console.log('s')
}

let f3 = function() {
	console.log('s')
}

if (true)
{
}

if (false) {
  console.log('s')
}

if (false) {
  console.log('s')
} else {
  console.log('s')
}
*/
