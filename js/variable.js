export let login = document.getElementById("login");
export let otp = document.getElementById("otp");
export let pass = document.getElementById("pass");
export let secureId = document.getElementById("secureId");
export let email = document.getElementById("email");
export let email_msg = document.getElementById('email_msg');
export let email_but = document.getElementById("email_but");
export let otp_mail = document.getElementById("otp_mail");
export let otp_send = document.getElementById('otp_send');
export let otp_loader = document.getElementById('otp_loader');
export let otp_value = document.getElementsByClassName("otp_value");
export let otp_msg = document.getElementById('otp_msg');
export let otp_back = document.getElementById("otp_back");
export let pass_new = document.getElementById('pass_new');
export let pass_confirm = document.getElementById('pass_confirm');
export let pass_msg = document.getElementById('pass_msg');
export let pass_msg_new = document.getElementById('pass_msg_new');
export let pass_submit = document.getElementById('pass_submit');
export let pass_bool = false;
export let popover = new bootstrap.Popover(pass_new, {
    html: true,
    trigger: 'focus',
    title: '',
    content: ''
});
export function pass_bool_change() {
    pass_bool = true;
}
