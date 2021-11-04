
    var xhr2 = new XMLHttpRequest();                 // Create XMLHttpRequest object

    xhr2.onload = function() {                       // When readystate changes
      // The following conditional check will not work locally - only on a server
      //if(xhr.status === 200) {                      // If server status was ok
        responseObject2 = JSON.parse(xhr2.responseText);

        // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
        var newContent = '';
        for (var i = 0; i < responseObject2.events.length; i++) { // Loop through object
          newContent += '<div>';
          newContent += '<label class="' + responseObject2.events[i].class + '" for="' + responseObject2.events[i].for + '" >' + responseObject2.events[i].text + '</label><br>';
          newContent += '<input type="' + responseObject2.events[i].type + '" id="' + responseObject2.events[i].id + '" name=' + responseObject2.events[i].name + ' required></input>';
          newContent += '</div>';
        }

  function validateRequired(el) {
    if (isRequired(el)) {
    var valid = !isEmpty(el);
    if (!valid) {
              setErrorMessage(el, 'Field required');
      }
    return valid;
  }
      return true;

    }


    function validateYear() {
      var yearDB = document.getElementById('yearDB');
      var valid = ((yearBD.value <= 2005 ) && (yearBD.value >=1920)) ;
      if (!valid) {
           setErrorMessage(yearDB, "The year of birth must be between 1920 and 2005");
         }
         return valid;
       }

    function validateMonth() {
      var monthDB = document.getElementById('monthDB');
      var valid = ((monthDB.value <= 12) &&  (monthDB.value >= 1));
      if (!valid) {
        setErrorMessage(monthDB, "The month of birth must be between 1 and 12");
      }
      return valid;
    }

    function validateDate() {
      var dateDB = document.getElementById('dateDB');
                var valid = ((dateDB.value <= 31) &&  (dateDB.value >= 1)) ;
                if (!valid) {
                     setErrorMessage(dateDB, "The date of birth must be between 1 and 31");
                     }
                       return valid;
      }

    function validatePermLet(){
      var permLet= document.getElementById('permLet');
      var valid = ((permLet.value.chatAt(0) == lName.value.chatAt(0)) &&
                  (permLet.value.chatAt(1) == lName.value.chatAt(1)) &&
                  (permLet.value.chatAt(2) == lName.value.chatAt(2)) &&
                  (permLet.value.chatAt(3) == frName.value.chatAt(0)));
                  if (!valid) {
                       setErrorMessage(permLet, "The Permanent Code Letters are incorrect");
                       }
                         return valid;
    }
    function validatePermNum(){
      var permNum= document.getElementById('permNum');
      var valid = ((permNum.value.chatAt(0) == dateDB.value.chatAt(0)) &&
                  (permNum.value.chatAt(1) == dateDB.value.chatAt(1)) &&
                  (permNum.value.chatAt(2) == monthDB.value.chatAt(0)) &&
                  (permNum.value.chatAt(3) == monthDB.value.chatAt(1)) &&
                  (permNum.value.charAt(4) == yearDB.value.charAt(0)) &&
                  (permNum.value.charAt(5) == yearDB.value.charAt(1)));
              if (!valid) {
                setErrorMessage(permLet, "The Permanent Code Letters are incorrect");
              }
              return valid;
      }
    

        // Update the page with the new content
        document.getElementById('content').innerHTML = newContent;
      //}
    };
    xhr2.open('GET', 'data/data.json', true);        // Prepare the request
    xhr2.send(null);                                 // Send the request
