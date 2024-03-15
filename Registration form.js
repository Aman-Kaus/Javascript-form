function fn(){
    var valid=true;
    var name=document.getElementById('valid1').value;
    var mobile=document.getElementById('valid2').value;
    var email=document.getElementById('valid3').value;
    var password=document.getElementById('valid4').value;
    var cpassword=document.getElementById('valid5').value;

    if(name==''){
        valid=false;
        var com=document.getElementById('name')
        com.innerHTML="* Please enter your name"
    }
    else if(name.length<5){
        valid=false;
        var com=document.getElementById('name')
        com.innerHTML="* Name must contain atleast 5 characters"
    }
    else{
        document.getElementById('name').innerHTML='';
    }
    if(mobile==''){
        valid=false;
        var com=document.getElementById('mobile')
        com.innerHTML="* Please enter your mobile no"
    }
    else if(mobile==123456789||mobile==1234567890){
        valid=false;
        var com=document.getElementById('mobile')
        com.innerHTML="* Please enter valid mobile no"
    }
    else if(mobile.length!=10){
        valid=false;
        var com=document.getElementById('mobile')
        com.innerHTML="* Please enter 10 digit mobile no"
    }
    else{
        document.getElementById('mobile').innerHTML='';
    }
    if(email==''){
        valid=false;
        var com=document.getElementById('email')
        com.innerHTML="* Please enter a valid email"
    }
    else{
        document.getElementById('email').innerHTML='';
    }
    if(password==''){
        valid=false;
        var com=document.getElementById('pass1')
        com.innerHTML="* Please enter a password"
    }
    else if(password=="password"||password==name){
        valid=false;
        var com=document.getElementById('pass1')
        com.innerHTML="* Password is not strong"
    }
    else if(password.length<8){
        valid=false;
        var com=document.getElementById('pass1')
        com.innerHTML="* Password must contain more than 8 characters"
    }
    else{
        document.getElementById('pass1').innerHTML='';
    }
    if(cpassword==''){
        valid=false;
        var com=document.getElementById('pass2')
        com.innerHTML="* Please enter a valid password"
    }
    else if(cpassword!=password){
        valid=false;
        var com=document.getElementById('pass2')
        com.innerHTML="* This field must match the password field"
    }
    else{
        document.getElementById('pass2').innerHTML='';
    }
    return valid;
}