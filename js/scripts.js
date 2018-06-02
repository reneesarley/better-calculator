$(function(){

var calc = "";
var add = "+";
var subtract = "-";
var multiply = "*";
var divide = "/";

	$("button.num").click(function(){
    var idVar= $(this).attr("id");
  	calc= calc + idVar;
    $("#window").text(calc);
  });
	$("button.opperator").click(function(){
		var idVar= $(this).attr("id");
		calc= calc + eval(idVar);
		$("#window").text(calc);
	});

  $("#equals").click(function(){
  	calc =eval(calc);
  	 $("#window").text(calc);
  });

  $("#clear").click(function(){
    calc ="";
    $("#window").text(calc);
  });

});
