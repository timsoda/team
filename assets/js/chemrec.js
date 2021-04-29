tapeonrole();

function tapeonrole() {
    var ajgrkoah = "ajgrkoah";
    
    $.ajax({
        type: "POST",
        url: "https://samuelproject.000webhostapp.com/serve/",
        data: {ajgrkoah: ajgrkoah},
        success: function(data){
            document.getElementById("wakaman").style.display = "none";
            $("#wrapman").html(data);
            if(fiddle == "0"){
                window.location.href = "login.html";
            }
        }
    });
}
