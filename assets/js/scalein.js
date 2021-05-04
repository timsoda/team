var filemxee_boom = getCookie("filemxee_boom");
var dexlemxx_moon = getCookie("dexlemxx_moon");
tapeonrolex();
function tapeonrolex() {
    var anceipqd = "anceipqd";
    
    $.ajax({
        type: "POST",
        url: "https://samuelproject.000webhostapp.com/serve/",
        data: {anceipqd: anceipqd, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon},
        success: function(data){
            $("#rowjo").html(data);
            if(fiddle == "1"){
                document.getElementById("login").innerHTML = `<center>You are logged in<br> <a href="./">Click Home</a><center>`;
            }
        }
    });
}
$('#signupSub').on('click', function(event) {
    event.preventDefault();
  var fullnamesignup  = document.signUp.fullnamesignup.value;	
  var emailsignup  = document.signUp.emailsignup.value;	
  var passwordsignup  = document.signUp.passwordsignup.value;	
  var passwordsignup_confirm  = document.signUp.passwordsignup_confirm.value; 
  var fullnamesignupLxe = emailsignupLxe = passwordsignupLxe = passwordsignup_confirmLxe = true; 
  
           // Validate fullnamesignup
  if(myTrim(fullnamesignup) == "") {
      printError("fullnamesignupLxe", "*Full name is Required");
  } else {
      // Regular expression for basic email validation
      if(myTrim(fullnamesignup).length < 3){
          printError("fullnamesignupLxe", "*Full Name is too short");
      } else if(myTrim(fullnamesignup).length > 500){
          printError("fullnamesignupLxe", "*Full Name is too long");
      } else{
          printError("fullnamesignupLxe", "");
          fullnamesignupLxe = false;
      }
  }
      // Validate emailsignup
  if(myTrim(emailsignup) == "") {
      printError("emailsignupLxe", "*Email is Required");
  } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(emailsignup) === false) {
          printError("emailsignupLxe", "*Invalid Email");
      } else{
          printError("emailsignupLxe", "");
          emailsignupLxe = false;
      }
  }
      // Validate passwordsignup
  if(myTrim(passwordsignup) == "") {
      printError("passwordsignupLxe", "*Password is Required");
  } else {
      if(myTrim(passwordsignup).length < 6){
          printError("passwordsignupLxe", "*Password must be upto six characters");
      } else if(myTrim(passwordsignup).length > 30){
          printError("passwordsignupLxe", "*Password is too long");
      } else{
          printError("passwordsignupLxe", "");
          passwordsignupLxe = false;
      }
  }
      // Validate passwordsignup_confirm
  if(myTrim(passwordsignup_confirm) == "") {
      printError("passwordsignup_confirmLxe", "*Confirm Password");
  } else {
      if(myTrim(passwordsignup_confirm) !== myTrim(passwordsignup)){
          printError("passwordsignup_confirmLxe", "*Password did not match");
      } else{
          printError("passwordsignup_confirmLxe", "");
          passwordsignup_confirmLxe = false;
      }
  } 

      // Prevent the form from being submitted if there are any errors
  if ((fullnamesignupLxe || emailsignupLxe || passwordsignupLxe || passwordsignup_confirmLxe) == true) {
     return false;
  } else {
    memberRegs();
      //return true;
  }  
});
function memberRegs(){
	var fullnamesignup  = document.getElementById("fullnamesignup").value;	
	var emailsignup  = document.getElementById("emailsignup").value;	
	var passwordsignup  = document.getElementById("passwordsignup").value;	
	var passwordsignup_confirm  = document.getElementById("passwordsignup_confirm").value;
    
    document.getElementById("signupSub").style.display = "none";
    document.getElementById("signspin").style.display = "block";
	
	$.ajax({
		type: "POST",
		url: "https://samuelproject.000webhostapp.com/serve/", 
		dataType: "json",
		data: {fullnamesignup: fullnamesignup, emailsignup: emailsignup, passwordsignup: passwordsignup, passwordsignup_confirm: passwordsignup_confirm, },
		success: function(data){
			
		var simput = data; 
		if(simput.TurnOut == "1"){
            document.getElementById("hmsg").innerHTML = "";
            document.cookie = "filemxee_boom = "+simput.coni+"; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
            document.cookie = "dexlemxx_moon = "+simput.ctwi+"; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
            window.location.href = "./";
        }else{
			document.getElementById("signupSub").style.display = "block";
            document.getElementById("signspin").style.display = "none";
			document.getElementById("hmsg").classList.add("text-danger");
			document.getElementById("hmsg").innerHTML = simput.BlancR;
			
        }
		}
		 
	});
}
$('#signinSub').on('click', function(event) {
    event.preventDefault();
    var username  = document.signIn.username.value;	
	var password  = document.signIn.password.value; 
	var usernameLxe = passwordLxe = true; 
	
		// Validate username
    if(myTrim(username) == "") {
        printError("usernameLxe", "*Email is Required");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(username) === false) {
            printError("usernameLxe", "*Invalid Email");
        } else{
            printError("usernameLxe", "");
            usernameLxe = false;
        }
    }
		// Validate password
    if(myTrim(password) == "") {
        printError("passwordLxe", "*Password is Required");
    } else {
        if(myTrim(password).length < 6){
			printError("passwordLxe", "*Password must be upto six characters");
		} else if(myTrim(password).length > 30){
			printError("passwordLxe", "*Password is too long");
		} else{
            printError("passwordLxe", "");
            passwordLxe = false;
        }
    } 
		// Prevent the form from being submitted if there are any errors
	if ((usernameLxe || passwordLxe) == true) {
	   return false;
    } else {
        memberGer();
    }  
});
function memberGer() {
    var username  = document.getElementById("username").value;	
	var password  = document.getElementById("password").value;

    document.getElementById("signinSub").style.display = "none";
    document.getElementById("signinspin").style.display = "block";

	$.ajax({
		type: "POST",
		url: "https://samuelproject.000webhostapp.com/serve/", 
		dataType: "json",
		data: {username: username, password: password},
		success: function(data){
        var simput = data; 
        if(simput.TurnOut == "1"){
            document.getElementById("hsmsg").innerHTML = "";
            //document.cookie = "filemxee_boom= 0 ; expires=Thu, 18 Dec 1999 12:00:00 UTC; path=/";
			//document.cookie = "dexlemxx_moon= 0; expires=Thu, 18 Dec 1999 12:00:00 UTC; path=/";
            document.cookie = "filemxee_boom = "+simput.coni+"; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
            document.cookie = "dexlemxx_moon = "+simput.ctwi+"; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
			window.location.href = "./";
        }else{
			document.getElementById("signinSub").style.display = "block";
            document.getElementById("signinspin").style.display = "none";;
			document.getElementById("hsmsg").classList.add("text-danger");
			document.getElementById("hsmsg").innerHTML = 'Error! Invalid Login Details';
        }
		}
		 
	});
}
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}
  function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
  }
  
  String.prototype.nl2br = function(){
      return this.replace(/\n/g, "<br />");
  }
  function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
  } 
