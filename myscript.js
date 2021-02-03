$(document).ready(function() {
  var q = 1;
  var select=1;
  $($("#Q" + q).find("td")).click(function() {
    $($("#Q" + q).find("td")).css("border", "none");
  });
  $("td").click(function() {
    $(this).css("border", "1px solid black");
    select=2;
  });
  $("#forward").click(function() {
    if(select == 2){
      q++;
      $("#Qnumber").html(q + "/9");
      //$(".right").css("background-color", "grey");
      //$(".wrong").css("background-color", "grey");
      select=1;
    }  
  });
});
