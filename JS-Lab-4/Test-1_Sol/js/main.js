var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint, el, lastkey; // Declare variables
elForm          = document.getElementById('formSignup');          // Store elements
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function setup() {                                  // Declare function
  //var textInput;                                    // Create variable
  var textInput = document.getElementById('message');  // Get text area input
  textInput.focus();                                // Give text area focus
}

function charCount(e) {                                    // Declare function
  lastkey = document.getElementById('lastKey');     // Get last key elem
  lastkey.textContent = 'ASCII code and Char of the last key: ' + 
                          e.keyCode + ' ' + String.fromCharCode(e.keyCode); // Create msg 
}

function textEntered(){
  var isFilled = document.getElementById('textFilled');
  if (el.textLength == 0){ 
    isFilled.textContent = "Enter a text";
    el.focus();
  }
  else{
    isFilled.textContent = "";
  }
}

function packageHint() {                                 // Declare function
  var pack = this.options[this.selectedIndex].value;     // Get selected option
  if (pack === 'option2') {                              // If monthly package
    elPackageHint.innerHTML = 'Second option';//Show this msg
  } else {                                               // Otherwise
    elPackageHint.innerHTML = 'First option';            // Show this message
  }
}

function checkTerms(event) {                             // Declare function
  if (!elTerms.checked) {                                // If checkbox ticked
    elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
    event.preventDefault();                              // Don't submit form
  }
}

window.addEventListener('load', setup, false); // When page loaded call setup()
el = document.getElementById('message'); 
el.addEventListener('keyup', charCount, false); // on keyup - call charCount()
el.addEventListener('blur',textEntered,false);

//Create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);