$(document).ready(function () {
    function checkName() {
        if ($("#txtName").val() == "") {
            $("#tbName").html("Please fill out this field!");
            return false;
        }
        if (!(/(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/).test($("#txtName").val())) {
            $("#tbName").html("Incorrect syntax!");
            
            return false;
        }
        $("#tbName").html("");
        return true;
    };
    $("#txtName").blur(checkName);
    function checkPass() {
        if ($("#txtPass").val()=="") {
            $("#tbPass").html("Please fill out this field!");
            return false;
        }
        if (!(/^[A-Za-z0-9]{8,24}$/).test($("#txtPass").val())) {
            $("#tbPass").html("Incorrect!");
            return false;
        }
        $("#tbPass").html("");
        return true;
    }
    $("#txtPass").blur(checkPass);
   })