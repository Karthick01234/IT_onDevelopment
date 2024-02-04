class ValidateJs {
  validate(type, value) {
    if (type == "email") {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        if (this.sendOtp(value)) {
          return "success";
        } else {
          return "net_err";
        }
      }
      return "code-invalid";
    }
    if (type == "otp") {
      return "success";
    }
    if (type == "pass") {
      return "success";
    }
  }
  strengthCheck(value) {
    let strongPassword =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])(?=.{8,})/;
    let mediumPassword =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])(?=.{6,})/;
    if (strongPassword.test(value)) {
      return "Strong";
    } else if (mediumPassword.test(value)) {
      return "Medium";
    } else {
      return "weak";
    }
  }
  containsCheck(value) {
    let passage = ``;
    let special_char = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    passage += /[a-z]/.test(value)
      ? `<p class="text-success"><i class="bi bi-check"></i>&nbsp;&nbsp;<small>Atleast one lowercase letter</small></p>`
      : `<p class="text-danger"><i class="bi bi-x"></i>&nbsp;&nbsp;<small>Atleast one lowercase letter</small></p>`;
    passage += /[A-Z]/.test(value)
      ? `<p class="text-success"><i class="bi bi-check"></i>&nbsp;&nbsp;<small>Atleast one uppercase letter</small></p>`
      : `<p class="text-danger"><i class="bi bi-x"></i>&nbsp;&nbsp;<small>Atleast one uppercase letter</small></p>`;
    passage += special_char.test(value)
      ? `<p class="text-success"><i class="bi bi-check"></i>&nbsp;&nbsp;<small>Atleast one Special characters</small></p>`
      : `<p class="text-danger"><i class="bi bi-x"></i>&nbsp;&nbsp;<small>Atleast one Special characters</small></p>`;
    passage += /\d/.test(value)
      ? `<p class="text-success"><i class="bi bi-check"></i>&nbsp;&nbsp;<small>Atleast one number</small></p>`
      : ` <p class="text-danger"><i class="bi bi-x"></i>&nbsp;&nbsp;<small>Atleast one number</small></p>`;
    passage +=
      value.length >= 8
        ? `<p class="text-success"><i class="bi bi-check"></i>&nbsp;&nbsp;<small>Minimum 8 characters</small></p>`
        : ` <p class="text-danger"><i class="bi bi-x"></i>&nbsp;&nbsp;<small>Minimum 8 characters</small></p>`;
    passage += /\s/g.test(value)
      ? `<p class="text-danger"><i class="bi bi-x"></i>&nbsp;&nbsp;<small>No Space characters</small></p>`
      : `<p class="text-success"><i class="bi bi-check"></i>&nbsp;&nbsp;<small>No Space characters</small></p>`;
    return passage;
  }
  sendOtp() {
    return true;
  }
}
export default ValidateJs;
