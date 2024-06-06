let mobileNumber = document.querySelector("#mobile");
mobileNumber.addEventListener("keyup", validateNumber);

function validateNumber() {
  let mobileNumber = document.querySelector("#mobile").value;
  if (mobileNumber.match(/^\d{10}$/)) {
    document.querySelector("#alert").innerHTML = "";
    return true;
  } else if (!mobileNumber) {
    document.querySelector("#alert").innerHTML = "";
    return false;
  } else {
    document.querySelector("#alert").innerHTML =
      "Please enter a valid mobile number";
    return false;
  }
}

let sendOTP = document.querySelector(".btn-yellow");
sendOTP.addEventListener("click", sendotp);

function sendotp() {
  if (validateNumber()) {
    let otp = Math.floor(1000 + Math.random() * 9000);
    if (typeof Storage !== "undefined") {
      sessionStorage.setItem("otp", otp);
    }
    alert("OTP is:" + otp);
  } else {
    alert("Mobile number Invalid");
    window.location.href = "index.html";
  }
}

let validateotp = document.querySelector("#mobile-number-box");
validateotp.addEventListener("keyup", validateOtp);

function validateOtp() {
  let userOTP = document.querySelector("#mobile-number-box").value;
  if (userOTP.match(/^\d{4}$/)) {
    document.querySelector("#alert").innerHTML = "";
    return true;
  } else if (!userOTP) {
    document.querySelector("#alert").innerHTML = "";
  } else {
    document.querySelector("#alert").innerHTML = "Please enter a valid OTP";
    return false;
  }
}

let verifyotp = document.querySelector(".btn-yellow");
verifyotp.addEventListener("click", verifyOtp);

function verifyOtp() {
  if (validateOtp()) {
    let otp = sessionStorage.getItem("otp");
    let userOTP = document.querySelector(".mobile-number-box").value;
    if (userOTP == otp) {
      alert("OTP Matched");
      window.location.href = "index.html";
    } else {
      alert("OTP Not Matched");
      window.location.href = "verify.html";
    }
  } else {
    alert("OTP Invalid");
    window.location.href = "verify.html";
  }
}
