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
		alert(idVar);
		calc= calc + eval(idVar);
		$("#window").text(calc);
	});
  // $("#plus").click(function(){
  //   calc= calc + add;
  //   $("#window").text(calc);
  // });
  // $("#minus").click(function(){
  //   calc= calc + subtract;
  //   $("#window").text(calc);
  // });
  // $("#times").click(function(){
  //   calc= calc + multiply;
  //   $("#window").text(calc);
  // });
  // $("#dividedBy").click(function(){
  //   calc= calc + divide;
  //   $("#window").text(calc);
  // });
	//
  // $("#equals").click(function(){
  // 	calc =eval(calc);
  // 	 $("#window").text(calc);
	//
  // });
  // $("#clear").click(function(){
  //   calc ="";
  //   $("#window").text(calc);
	//
  // });

});
