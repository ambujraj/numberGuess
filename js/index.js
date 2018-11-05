//jQuery time

//add '.ready' to form when user focuses on it
$("#guess").focus(function(){
	$("#cuboid form").addClass("ready");
})
//remove '.ready' when user blus away but only if there is no content
$("#guess").blur(function(){
	if($(this).val() == "")
		$("#cuboid form").removeClass("ready");
});

let secretN = 0;
let numguess = 0;

function writeMessage(elementId, message, appendMessage){
	let elemToUpdate = document.getElementById(elementId);
	if(appendMessage){
		elemToUpdate.innerHTML= elemToUpdate.innerHTML+message;

	}
	else{
		elemToUpdate.innerHTML = message;
	}
}

function newGame(){
	secretN = Math.floor(Math.random()*100)+1;
	numguess = 0;
	writeMessage('historyList', '');
}

function guessInRange(guess){
	return (guess>0 && guess<101);
}

