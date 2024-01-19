$(document).ready(function () {
  $("#log_form").submit(function (x) {
    let first_name = $("#first_name").val();
    let last_name = $("#last_name").val();
    let email_add = $("#email_add").val();
    let mobile_num = $("#mobile_num").val();
    let pw = $("#pw").val();
    let con_pw = $("#con_pw").val();

    let valid_form_data = true;
    if (pw != con_pw) {
      alert("ERROR: Password and confirm password do not match!");
      valid_form_data = false;
    }

    if (!mobile_num.startsWith("09")) {
      alert("ERROR: Mobile number must start with 09!");
      valid_form_data = false;
    }

    if (valid_form_data) {
      $("#log_summary").prop("hidden", false); //make the Log Summary section visible
      $(".log-input").prop("disabled", true); //disable all Log Here! section input blanks
      $("#first_name_l").text(first_name);
      $("#last_name_l").text(last_name);
      $("#email_add_l").text(email_add);
      $("#mobile_num_l").text(mobile_num);
      alert("Log successful!");
    } else {
      alert("ERROR: Issue with form data!");
    }

    x.preventDefault();
  });
});
