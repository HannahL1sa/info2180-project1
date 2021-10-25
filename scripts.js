window.onload = function () {
   var form = document.querySelector("form");
   form.setAttribute('onsubmit','return validateInput (event);');
 }

function validateInput(event) {
   event.preventDefault();
   let checkEmpty = document.querySelector("input");
   let message = document.getElementsByClassName("message");
   var error = "Please enter a valid email address";
   var success = "Thank you! Your email address " + checkEmpty.value + " has been added to our mailing list!";

   if(checkEmpty.value == ""){
      alert(message.innerHTML = error);
      return false;
   }
   alert(message.innerHTML = success);  
}