import validateJS from './validate.js';
import * as val from './variable.js';
export function eventListen() {
    let validateObj = new validateJS();

    val.email.addEventListener('click', function () {
        val.email_msg.innerHTML = "";
    })

    val.email_but.addEventListener('click', function () {
        let val_email = validateObj.validate('email', val.email.value)
        if (val_email === 'success') {
            val.login.style.display = "none";
            val.otp.style.display = "block";
            val.otp_mail.innerHTML = "*******" + val.email.value.slice(-8);
            val.otp_send.disabled = true;
            setTimeout(function () {
                val.otp_loader.style.display = 'none';
                val.otp_send.innerHTML = 'Resend Otp';
                val.otp_send.disabled = false;
            }, 5000);
        }
        else if (val_email === 'code-invalid') {
            val.email_msg.innerHTML = "Invalid Email ID <br />";
            val.email.value = '';
        }
        else {
            val.email_msg.innerHTML = "Network error ! Try again <br />";
        }
    })

    function fetch_otp() {
        let result = '';
        for (let i = 0; i < val.otp_value.length; i++) {
            result += val.otp_value[i].value;
        }
        return result;
    }

    function verify() {
        let actual_otp = fetch_otp();
        if (actual_otp !== '' && actual_otp.length == 6) {
            let val_otp = validateObj.validate('otp', actual_otp)
            if (val_otp === 'success') {
                val.otp.style.display = "none";
                val.pass.style.display = "block";
            }
            else if (val_otp === 'otp-invalid') {
                val.otp_msg.innerHTML = "Wrong OTP <br />";
            }
            else {
                val.otp_msg.innerHTML = "Something went wrong ! Try again <br />";
            }
        }
    };

    for (let i = 0; i < val.otp_value.length; i++) {
        val.otp_value[i].addEventListener('keyup', function (event) {
            if (event.key === "Backspace") {
                val.otp_value[i].value = '';
                if (i !== 0) val.otp_value[i - 1].focus();
            }
            else {
                if (event.keyCode > 47 && event.keyCode < 58) {
                    val.otp_msg.innerHTML = '';
                    val.otp_value[i].value = event.key;
                    if (i !== val.otp_value.length - 1) val.otp_value[i + 1].focus();
                    if (i === val.otp_value.length - 1 && val.otp_value[i].value !== '') {
                        verify();
                    }
                    event.preventDefault();
                }
                else {
                    val.otp_value[i].value = '';
                    if (i !== val.otp_value.length - 1) val.otp_value[i].focus();
                    val.otp_msg.innerHTML = "Invalid otp <br />";
                    event.preventDefault();
                }
            }
        });
    }

    val.otp_send.addEventListener('click', function () {
        if (validateObj.sendOtp(val.email.value)) {
            val.otp_msg.innerHTML = "Otp send successfull <br />";
        }
        else {
            val.otp_msg.innerHTML = "Network error ! Try again <br />";
        }
    })

    val.otp_back.addEventListener('click', function () {
        window.location.reload();
    })

    val.pass_new.addEventListener('input', function (e) {
        val.pass_msg.innerHTML = '';
        val.pass_msg_new.innerHTML = '';
        let strength = 'very weak';
        let passage = ` <p class="text-danger"><i class="bi bi-x"></i>&nbsp;&nbsp;<small>Atleast one lowercase letter</small></p>
        <p class="text-danger"><i class="bi bi-x"></i>&nbsp;&nbsp;<small>Atleast one uppercase letter</small></p>
        <p class="text-danger"><i class="bi bi-x"></i>&nbsp;&nbsp;<small>Atleast one Special characters</small></p>
        <p class="text-danger"><i class="bi bi-x"></i>&nbsp;&nbsp;<small>Atleast one number</small></p>
        <p class="text-danger"><i class="bi bi-x"></i>&nbsp;&nbsp;<small>Minimum 8 characters</small></p>
        <p class="text-success"><i class="bi bi-check"></i>&nbsp;&nbsp;<small>No Space characters</small></p>`
        if (val.pass_new.value === '') {
            strength = 'Empty Password';
            passage = '';
        }
        else {
            strength = validateObj.strengthCheck(val.pass_new.value);
            passage = validateObj.containsCheck(val.pass_new.value);
        }
        let popcontent = bootstrap.Popover.getInstance(val.pass_new);
        popcontent._config.title = strength;
        popcontent._config.content = passage;
        popcontent.setContent();
        val.popover.show();
        if (strength === 'Strong') {
            val.pass_bool_change();
        }
    });

    val.pass_confirm.addEventListener('focus', function () {
        if (!val.pass_bool) {
            val.pass_new.focus();
        }
        else {
            val.pass_msg.innerHTML = '';
        }
    })

    val.pass_submit.addEventListener('click', function () {
        if (val.pass_new.value !== '' & val.pass_confirm.value !== '') {
            if (val.pass_new.value === val.pass_confirm.value) {
                if (validateObj.validate('pass', val.pass_new.value)) {
                    val.pass.style.display = "none";
                    val.secureId.style.display = "block";
                }
                else {
                    val.pass_msg.innerHTML = "Something went wrong ! Try again <br />";
                }
            }
            else {
                val.pass_new.value = '';
                val.pass_confirm.value = '';
                val.pass_msg.innerHTML = "password Mismatched <br />";
                let popcontent = bootstrap.Popover.getInstance(val.pass_new);
                popcontent._config.title = 'Empty Password';
                popcontent._config.content = '';
                popcontent.setContent();
            }
        }
        else {
            if (val.pass_new.value === '') {
                val.pass_msg_new.innerHTML = "Please enter password <br />";
            }
            if (val.pass_confirm.value === '') {
                val.pass_msg.innerHTML = "Please enter password <br />";
            }
        }
    })
}

