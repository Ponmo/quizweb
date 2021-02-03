$(document).ready(function() {
  var q = 1;
  $(jQuery("#Q" + q).find("td")).click(function() {
    $(jQuery("#Q" + q).find("td")).css("border", "none");
  });
  $("td").click(function() {
    $(this).css("border", "1px solid black");
  });
  $("#forward").click(function() {
    q++;
    $("#Qnumber").html(q + "/9");
    //$(".right").css("background-color", "grey");
    //$(".wrong").css("background-color", "grey");
  });
});
