$(document).ready(function() {
  var q = 1;
  var select=1;
  $(".table").click(function() {
    $("#Q" + q).find("td").click(function() {
      if(q<10){
        $("#Q" + q).find("td").css("border", "none");
      }
    });
    $("td").click(function() {
      if(q<10){
        $(this).css("border", "1px solid black");
        select=2;
      }
    });
  });
  $("#forward").click(function() {
    if(select == 2){
      $("#Q" + q).hide();
      q++;
      $("#Q" + q).show();
      $("#Qnumber").html(q + "/9");
      select=1;
    }  
    if(q == 9) {
      $("#forward").hide();
      $("button").show();
    }
  });
  $("button").click(function() {
    q++;
    $("#table2").hide();
    $(".table").show();
    $(".wrong").css("background-color", "red");
    $(".right").css("background-color", "green");
  });
});
