$(document).ready(function() {
  var q = 1;
  $(".table").mouseover(function() {
    $("#Q" + q).find("td").click(function() {
      $("#Q" + q).find("td").css("border", "2px solid white");
      $(this).css("padding", "25px");
    });
    $("td").click(function() {
      if(q!=10) {
        $(this).css("border", "4px solid black");
        $(this).css("padding", "21px");
      }
      $("#forward").show();
      $("#forwardfake").hide();
      if(q == 9) {
        $("#forward").hide();
        $("#forwardfake").hide();
        $("button").show(); 
      }
    });
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
