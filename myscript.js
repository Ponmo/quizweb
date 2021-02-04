$(document).ready(function() {
  var q = 1;
  if(q!=10) {
    $("#Q" + q).find("td").click(function() {
      $("#Q" + q).find("td").css("border", "2px solid white");
    });
    $("td").click(function() {
      $("#forward").show();
      $("#forwardfake").hide();
      if(q == 9) {
        $("#forward").hide();
        $("#forwardfake").hide();
        $("button").show(); 
      }
    });
  }
  $("td").click(function() {
      if(q!=10) {
        $(this).css("border", "2px solid black");
      }
  });
  $("#forward").click(function() {
    $("#forward").hide();
    $("#forwardfake").show();
    $("#Q" + q).hide();
    q++;
    $("#Q" + q).show();
    $("#Qnumber").html(q + "/9");
  });
  $("button").click(function() {
    q++;
    $("#table2").hide();
    $(".table").show();
    $(".wrong").css("background-color", "indianred");
    $(".right").css("background-color", "darkseagreen");
  });
});
