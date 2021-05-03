var filemxee_boom = getCookie("filemxee_boom");
var dexlemxx_moon = getCookie("dexlemxx_moon");
tapeonrole();
function tapeonrole() {
    var ajgrkoah = "ajgrkoah";
    
    $.ajax({
        type: "POST",
        url: "https://samuelproject.000webhostapp.com/serve/",
        data: {ajgrkoah: ajgrkoah, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon},
        success: function(data){
            document.getElementById("wakaman").style.display = "none";
            $("#wrapman").html(data);
            if(fiddle == "0"){
                window.location.href = "login.html";
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
