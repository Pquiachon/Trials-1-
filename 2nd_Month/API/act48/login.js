$(document).ready(function () {
  if (localStorage.getItem("saved_username") != null) {
    let saved_username = localStorage.getItem("saved_username");
    $("#username").val(saved_username);
  }
  if (localStorage.getItem("saved_pw") != null) {
    let saved_pw = localStorage.getItem("saved_pw");
    $("#password").val(saved_pw);
  }
  $("#submit").click(function (x) {
    let username = $("#username").val();
    let password = $("#password").val();

    if (username == "user" && password == "pw123") {
      localStorage.setItem("loggedIn", 1);
      window.location.href = "home.html";
    } else {
      alert("Incorrect username and/or password!");
    }

    x.preventDefault();
  });

  $("#remember_me").prop(function () {
    if ($(this).is(":checked")) {
      let username = $("#username").val();
      let password = $("#password").val();

      localStorage.setItem("saved_username", username);
      localStorage.setItem("saved_pw", password);
    }
  });
});
