function validation(){
    var name = document.getElementById('input-1').value;
    var email = document.getElementById('input-2').value;
    var number = document.getElementById('input-3').value;
    var password = document.getElementById('input-4').value;
    var cpassword = document.getElementById('input-5').value;

    var namecheck = /^[A-Za-z ]{2,}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    if(namecheck.test(name)){
        document.getElementById('error-name').innerHTML = " ";
    }
    else{
        document.getElementById('error-name').innerHTML = "Use Only Alphabets";
        return false;
    }
    if(emailcheck.test(email)){
        document.getElementById('error-email').innerHTML = " ";
    }
    else{
        document.getElementById('error-email').innerHTML = "Invalid Email Syntax";
        return false;
    }
    if(numbercheck.test(number)){
        document.getElementById('error-number').innerHTML = " ";
    }
    else{
        document.getElementById('error-number').innerHTML = "Use 10 digit Mobile Number";
        return false;
    }
    if(passwordcheck.test(password)){
        document.getElementById('error-password').innerHTML = " ";
    }
    else{
        document.getElementById('error-password').innerHTML = "Use alphabets, number & special characters. Min: 8, max: 16";
        return false;
    }

    if(cpassword.match(password)){
        document.getElementById('error-c-password').innerHTML = " ";
    }
    else{
        document.getElementById('error-c-password').innerHTML = "Password does not match";
        return false;
    }

}

