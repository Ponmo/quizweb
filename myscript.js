$(document).ready(function() {
  var q = 1;
  $("td").click(function() {
    $(".Q" + q).css("border", "none");
    $("this").css("border", "1px solid black";
  }
  $(".right").click(function() {
    $(".right").css("background-color", "green";)
  });
  $(".wrong").click(function() {
    $(".wrong").css("background-color", "red";)
  });
  $("#forward").click(function() {
    q++;
    $("Qnumber") = + q+  "/12"
    $(".right").css("background-color", "grey";)
    $(".wrong").css("background-color", "grey";)
    //include making back button readable. adding a number and an id. var for(q = 1; q < 4; q++) $("#show" +q).click
  });
});
