var xhr3 = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr3.onload = function() {                       // When readystate changes
  // The following conditional check will not work locally - only on a server
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject3 = JSON.parse(xhr3.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContentCon = '';
    for (var i = 0; i < responseObject3.contact.length; i++) { // Loop through object
      newContentCon += '<div>';
      newContentCon += '<label class="' + responseObject3.contact[i].class + '" for="' + responseObject3.contact[i].for + '" >' + responseObject3.contact[i].text + '</label><br>';
      newContentCon += '<input type="' + responseObject3.contact[i].type + '" id="' + responseObject3.contact[i].id + '" name=' + responseObject3.contact[i].name + ' required></input>';
      newContentCon += '</div>';
    }
    document.getElementById('contact').innerHTML = newContentCon;
  };
  xhr3.open('GET', 'data/contact-data.json', true);        // Prepare the request
  xhr3.send(null);
