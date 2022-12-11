function load(href) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}
var holder = document.getElementById('holder');
holder.innerHTML += load('view/email_View.html');
holder.innerHTML += load('view/otp_View.html');
holder.innerHTML += load('view/pass_View.html');
holder.innerHTML += load('view/secure_View.html');
