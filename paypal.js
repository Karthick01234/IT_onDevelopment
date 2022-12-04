$("#otp").hide()
$("#pass").hide()
$("#imp").hide()
function otp(){
    let m =$("#email_or_phone").val();
    let r = document.getElementById("email_or_phone").value;
    /*let emailidentifier = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let email = emailidentifier.test(r)
    let phoneidentifier = /^(\+91-|\+91|0)?\d{10}$/;
    let phone = phoneidentifier.test(r);*/
    let email_or_phone = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
    let identifier = email_or_phone.test(r);
    
    if(m.length==0){
        $("#imp").show()
        $("#login").show()
        $("#otp").hide()
    }
    /*else if(email==false || phone==false){
        $("#imp").html("Please Enter Email of Correct format")
        $("#imp").show()
        $("#otp").hide()
    }
    
    else if(){
        $("#imp").html("Please Enter correct Mobile Number")
        $("#imp").show()
        $("#otp").hide()
    }*/

    else if(identifier==false){
        $("#imp").html( "Email Address / Phone number is not valid, Please provide a valid Email or phone number");
        $("#imp").show()
        $("#otp").hide()
    }
    
    else{
        $("#imp").hide()
        $("#login").hide()
        $("#otp").show()
    }
    
}
$("#otpvalid").hide()


$(".o").keyup(function () {
    if (this.value.length == this.maxLength) {
        var $next = $(this).next('.o');
        if ($next.length)
            $(this).next('.o').focus();
        else
            $(this).blur();
      }
      
});

$("#6").keyup(function () {
    if (this.value.length == this.maxLength) {
        
        $('#verify').trigger('click');
        
      }
      
});
function verify(){

    let parameter = /^\d+$/;

    let check=true;
    for(i=1;i<=6;i++){
        //let =;
        let otp_verify = $("#"+i).val()
        let y = parameter.test(otp_verify)
        check=check&&y
    }
    if(check==false){
        $("#otpvalid").html("Invalid OTP")
        $("#otpvalid").show()
    }
    else if(check==true){
        $("#otpvalid").hide()
        $("#pass").show()
        $("#login").hide()
        $("#otp").hide()
        
    }
    //alert(check)

}
function back(){
    $("#otp").hide()
    $("#login").show()
    
}

function password(){
    let length=true
    let content = true
    //let AllCompare = true
    let np=$("#p1").val()
    let cp=$("#p2").val()
    var password_validator = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let new_password_check= password_validator.test(np);
    let confirm_password_check = password_validator.test(cp);
    let both = new_password_check && confirm_password_check
    // alert(both)
    // alert(new_password_check===confirm_password_check)
    let c1 = Array.from(np)
    let c2 = Array.from(cp)
    if(c1.length!=c2.length)
        length=false;
    else
    {
     for(var i=0;i<c1.length;i++)
     if(c1[i]!=c2[i])
        content=false;
        content=true;
    }

    if((both&&length&&content)===true){
        $("#passwordcheck").hide()
        alert("Welcome!")
    }
    else{
        $("#passwordcheck").html("Passwords not Matched")
    }
}