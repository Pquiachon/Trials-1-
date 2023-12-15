$(document).ready(function () {
  $("#studentButton").click(function () {
    let currentCount = Number($("#student-count").text());
    $("#student-count").text(currentCount + 1);
  });
  $(".card-body").click(function () {
    $(this).toggleClass("subject-selected");
  });
});
