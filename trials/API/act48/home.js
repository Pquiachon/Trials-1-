$(document).ready(function (x) {
  $("#logout").click(function () {
    localStorage.clear("remember_me");
    window.location.href = "login.html";
    x.preventDefault();
  });
});
