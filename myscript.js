$(document).ready(function() {
  var q = 1;
  $(".right").click(function() {
    $(".right").css("background-color", "green";)
  });
  $(".wrong").click(function() {
    $(".wrong").css("background-color", "red";)
  });
  $("#back").click(function() {
  });
  $("#forward").click(function() {
    q++;
    $("Qnumber") = + q+  "/12"
    $(".right").css("background-color", "grey";)
    $(".wrong").css("background-color", "grey";)
    //include making back button readable. adding a number and an id. var for(q = 1; q < 4; q++) $("#show" +q).click
  });
});
