$(document).ready(function () {
    function checkName() {
        if ($("#txtNameSU").val() == "") {
            $("#tbNameSU").html("Please fill out this field!");
            return false;
        }
        if (!(/(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/).test($("#txtNameSU").val())) {
            $("#tbNameSU").html("Incorrect syntax!");
            return false;
        }
        $("#tbNameSU").html("");
        return true;
    };
    $("#txtNameSU").blur(checkName);
    function checkBirthDay() {
        if ($("#txtDay").val()=="") {
            $("#tbDay").html("Please fill out this field!");
            return false;
        }
        if ((new Date($("#txtDay").val()))>(new Date)) {
            $("#tbDay").html("This field must be less than today!");
            return false;
        }
        $("#tbDay").html("");
        return true;
    };
    $("#txtDay").blur(checkBirthDay);
    function checkMail() {
        if($("#txtMailSU").val() == ""){
            $("#tbMailSU").html("Please fill out this field!");
            return false;
        }
        if (!(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test($("#txtMailSU").val())) {
            $("#tbMailSU").html("Incorrect syntax!");
            return false;
        }
        $("#tbMailSU").html("");
        return true;
    }; $("#txtMailSU").blur(checkMail);

    function checkNum() {
        if ($("#txtNum").val() == "") {
            $("#tbNum").html("Please fill out this field!");
            return false;
        }
        if (!(/(^[0]{1})([0-9]{2})-([0-9]{3})-([0-9]{4})$/).test($("#txtNum").val())) {
            $("#tbNum").html("Incorrect syntax!");
            return false;
        }
        $("#tbNum").html("");
        return true;
    }
    $("#txtNum").blur(checkNum);
    function checkAdd() {
        if ($("#txtAdd").val() == "") {
            $("#tbAdd").html("Please fill out this field!");
            return false;
        }
        if (!(/^([A-Za-z0-9]{2,})$/).test($("#txtAdd").val())) {
            $("#tbAdd").html("Incorrect syntax!");
            return false;
        }
        $("#tbAdd").html("");
        return true;
    };
    $("#txtAdd").blur(checkAdd);
   })