function f_one(){
  return 'Spaced'
}

function f_two() {
	return "Tabbed"
}

function f_three(parameter) {
	if(1==1){
		return 'Too compact'
	}
        else if(2 == 2){
		return 'No space after else!'
	} else if ( 3==3 ) {
	} else if (3==3) {
        } else {
		return 'This is fine'
	}
}

f_one()
f_two()
f_three(3)
