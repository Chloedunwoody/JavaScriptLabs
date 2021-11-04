var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  // The following conditional check will not work locally - only on a server
  //if(xhr2.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

        var newContentRad = '';
        for (var i = 0; i < responseObject.radio.length; i++) {

        newContentRad += '<div>';
        newContentRad += '<label class="' + responseObject.radio[i].class + '" for="' + responseObject.radio[i].for + '" >' + responseObject.radio[i].text + '</label><br>';
        newContentRad += '<input type="' + responseObject.radio[i].type1 + '" id="' + responseObject.radio[i].id1 + '" name=' + responseObject.radio[i].name1 + '" value=' + responseObject.radio[i].value1 + ' required>';
        newContentRad += '<label for="' + responseObject.radio[i].for1 + '" >' + responseObject.radio[i].text1 + '</label>';
        newContentRad += '<input type="' + responseObject.radio[i].type2 + '" id="' + responseObject.radio[i].id2 + '" name=' + responseObject.radio[i].name2 + '" value=' + responseObject.radio[i].value2 + '>';
        newContentRad += '<label for="' + responseObject.radio[i].for2 + '" >' + responseObject.radio[i].text2 + '</label>';
        newContentRad += '</div>';
      }


      document.getElementById('radio').innerHTML = newContentRad;
    //}
  };
  xhr.open('GET', 'data/radio-data.json', true);        // Prepare the request
  xhr.send(null);
