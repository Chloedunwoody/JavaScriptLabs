var stId = document.getElementById("studentID");
var elIdFailed = document.getElementById("idFilled");
var lastkey = document.getElementById("lastKey");
var elTextFilled = document.getElementById("textFilled");
var msg = document.getElementById("message");
var terms = document.getElementById("terms");
var termsHint = document.getElementById("termsHint");
var theForm = document.getElementById("formSignup");
var couseOption = document.getElementById("package");
var packHint = document.getElementById("packageHint");

function stIdCheck(val)
{

		if((stId.value.length == val) && (Number(stId.value)))
		{
			elIdFailed.innerHTML = "Perfect, id matches the requirements!";
			elIdFailed.setAttribute("style","color:green;");

		}
		else
		{
			elIdFailed.innerHTML = "Your ID must be exactly " + val + " digits long!";
			elIdFailed.setAttribute("style","color:red;");
		}
}

function charCount(e)
{
	var txtEntered, counter;
	txtEntered = document.getElementById('message').value;

	counter = (180 - (txtEntered.length));

	lastkey.textContent = "Remaining characters: " + counter +
                          " ; Last key entered: " + String.fromCharCode(e.keyCode) + " ;  ASCII code" + e.keyCode;
}

function textEntered()
{
	if ((msg.textLength == 0))
	{
		elTextFilled.textContent = "Please enter your name.";
	}
	if (!isNaN(msg.value))
	{
		elTextFilled.textContent = "Please enter your name, NOT a number!";
		msg.value = " ";
	}
}

function termsCheck(event)
{
	if(!terms.checked)
	{
		termsHint.innerHTML = "Please agree to the terms";
		event.preventDefault();
	}
}

function packageHint()
{
	var pack = this.options[this.selectedIndex].value;
	if(pack === 'option1')
	{
		packHint.innerHTML = "Best option"
	}
	else
	{
		packHint.innerHTML = "Second option"
	}
}

stId.addEventListener("blur", function(){ stIdCheck(7); } , false);
msg.addEventListener("keyup",charCount, false);
msg.addEventListener("blur", textEntered, false);
couseOption.addEventListener("change", packageHint, false);
theForm.addEventListener("submit", termsCheck, false);
