$(document).ready(function() {
  var q = 1;
  $(".table").mouseover(function() {
    $("#Q" + q).find("td").click(function() {
      $("#Q" + q).find("td").css("border", "4px solid #A9A9A9");
    });
    $("td").click(function() {
      if(q!=10) {
        $(this).css("border", "4px solid black");
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
    $(".wrong").css("background-color", "#ffa6a6");
    $(".right").css("background-color", "#bcf5bc");
  });
});
