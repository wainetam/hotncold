//window.onload = hotncold; //why not document

var target = Math.floor((Math.random()*100)+1); //random integer between 1 and 100

function hotncold() {	
	var guess = document.getElementById("guess").value; //stores value submitted by user
	var correct = false; //boolean variable

	while (!correct) {
		if (guess > target) {
			document.getElementById("response").innerHTML=guess +" is Too High";
			break;
		}	
		if (guess < target) {
			document.getElementById("response").innerHTML=guess + " is Too Low";
			//how to clear text field?
			break;
		}
		else {
			correct = true;
			document.getElementById("response").innerHTML="Wow, you got it right!";
		}
	}
}


/*	var target = Math.floor((Math.random()*100)+1); //random integer between 1 and 100
	
	var guess = prompt("Pick a number!");

	var correct = false; //boolean variable

	while (!correct) {
		if (guess > target) {
			alert("Too High!");
			guess = prompt("Pick again!");
		}	
		if (guess < target) {
			alert("Too Low!");
			guess = prompt("Pick again!");
		}
		else {
			correct = true;
		}
	}

	alert("Wow, you got it right!") */