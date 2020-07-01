var pass = document.querySelector("#password");
var eye = document.querySelector(".fas");
function show() {
  if (pass.type === "password") {
    pass.type = "text";
    eye.className = "fas fa-eye";
  } else {
    pass.type = "Password";
    eye.className = "fas fa-eye-slash";
  }
}
