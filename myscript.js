$(document).ready(function() {
  var q = 1;
  var select=1;
  $(".table").click(function() {
    $("#Q" + q).find("td").click(function() {
      $("#Q" + q).find("td").css("border", "none");
    });
    $("td").click(function() {
      $(this).css("border", "2px solid black");
      if(q < 9)
      {
        $("#forward").show();
      }
      else()
      {
        $("#forward").hide();
        $("#forwardfake").hide();
        $("button").show();
      }
      $("#forwardfake").hide();
      select=2;
    });
  });
  $("#forward").click(function() {
    if(select == 2){
      $("#forward").hide();
      $("#forwardfake").show();
      $("#Q" + q).hide();
      q++;
      $("#Q" + q).show();
      $("#Qnumber").html(q + "/9");
      select=1;
    }  
  });
  $("button").click(function() {
    q++;
    $("#table2").hide();
    $(".table").show();
    $(".wrong").css("background-color", "indianred");
    $(".right").css("background-color", "darkseagreen");
  });
});
