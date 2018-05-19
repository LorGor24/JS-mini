
let num1 = 7;
let num2 = 8;

console.log(num1 + num2);


let string1 = 'Whats';
let string2 = 'up';

console.log(string1 + ' ' + string2);


let array1 = ['Knicks', 'Net','Lakers',['Spurs', 'Mavericks'], 'Rockets'];
console.log(array1[3])


function validator(number){

	if (number < 100) {
		alert(number + 'is less to 100');
	} else if (number >  100) {
		alert(number+ 'is greater than to 100');
	} else if (number ===  100) {
		alert(number + 'is equals 100');
	}  else if(isNaN(number) === true) {
		alert('Pick a number')
	}
}


function nameChecker(name) {
	return console.log('Your name is ' + name);
}


function Door(selectDoor) {

	if (selectDoor === 1) {
		alert('you unlocked prize 1');
	} else if (selectDoor=== 2) {
		alert('You unlocked prize 2');
	} else if (selectDoor === 3) {
		alert('You got prize 3!');
	} else if(isNaN(selectDoor) === true) {
		alert('Wrong door')
	}
}
