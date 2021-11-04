var xhr4 = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr4.onload = function() {                       // When readystate changes
  // The following conditional check will not work locally - only on a server
  //if(xhr4.status === 200) {                      // If server status was ok
    responseObject4 = JSON.parse(xhr4.responseText);

        var newContentTon = '';
        for (var i = 0; i < responseObject4.tongue.length; i++) {

        newContentTon += '<div>';
        newContentTon += '<label class="' + responseObject4.tongue[i].class + '" for="' + responseObject4.tongue[i].for + '" >' + responseObject4.tongue[i].text + '</label><br>';
        newContentTon += '<input type="' + responseObject4.tongue[i].type1 + '" id="' + responseObject4.tongue[i].id1 + '" name=' + responseObject4.tongue[i].name1 + '" value=' + responseObject4.tongue[i].value1 + ' required>';
        newContentTon += '<label for="' + responseObject4.tongue[i].for1 + '" >' + responseObject4.tongue[i].text1 + '</label>';
        newContentTon += '<input type="' + responseObject4.tongue[i].type2 + '" id="' + responseObject4.tongue[i].id2 + '" name=' + responseObject4.tongue[i].name2 + '" value=' + responseObject4.tongue[i].value2 + '>';
        newContentTon += '<label for="' + responseObject4.tongue[i].for2 + '" >' + responseObject4.tongue[i].text2 + '</label>';
        newContentTon += '<input type="' + responseObject4.tongue[i].type3 + '" id="' + responseObject4.tongue[i].id3 + '" name=' + responseObject4.tongue[i].name3 + '" value=' + responseObject4.tongue[i].value3 + '>';
        newContentTon += '<label for="' + responseObject4.tongue[i].for3 + '" >' + responseObject4.tongue[i].text3 + '</label>';
        newContentTon += '</div>';
      }


      document.getElementById('tongue').innerHTML = newContentTon;
    //}
  };
  xhr4.open('GET', 'data/tongue-data.json', true);        // Prepare the request
  xhr4.send(null);
