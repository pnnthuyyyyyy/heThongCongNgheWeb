$(document).ready(function(){
    function checkMail() {
        if($("#txtMail").val() == ""){
            $("#tbMail").html("Please fill out this field!");
            return false;
        }
        if (!(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test($("#txtMail").val())) {
            $("#tbMail").html("Incorrect syntax!");
            return false;
        }
        $("#tbMail").html("");
        return true;
    }; $("#txtMail").blur(checkMail);
})