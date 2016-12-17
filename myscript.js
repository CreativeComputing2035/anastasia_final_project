$(document).ready(function(){
	console.log('hey');
	$("#main_photo, #truck , #cards, #letter, #calendar, #riot, #tempest, #goddess, #cover, #cmwc, #landscape, #deceiver, .email_link, #about, #about, #bags").hide();
	$("#main_photo").fadeIn(3000);
	$(".click_work").hide();
	$("#project_description li:first").hide();
	$("#project_description li:nth-child(2)").hide();
	$("#project_description li:nth-child(3)").hide();
	$("#project_description li:nth-child(4)").hide();
	$("#project_description li:nth-child(5)").hide();
	$("#project_description li:nth-child(6)").hide();
	$("#project_description li:nth-child(7)").hide();
	$("#project_description li:nth-child(8)").hide();
	$("#project_description li:nth-child(9)").hide();
	$("#project_description li:nth-child(10)").hide();
	$(".work").click(function(){
		$(".click_work").show();
		$(".email_link").hide();
		$("#about").hide();
	})
	// Changing the image based on which project is clicked
	// // Blue Hill Rebranding
	$(".click_work li:first").click(function(){
		$("#main_photo, #cards, #letter, #calendar, #riot, #tempest, #goddess, #cover, #cmwc, #landscape, #deceiver").hide();
		$("#truck").show();
		// $("#project_description li:first").show();
		// $("#click_work li:nth-child(1)").css("color", "")
		console.log('this is working');
	})
// 	//3D Cards
	$(".click_work li:nth-child(2)").click(function(){
		$("#main_photo, #truck , #letter, #calendar, #riot, #tempest, #goddess, #cover, #cmwc, #landscape, .deceiver").hide();
		$("#cards").show();

	})
	// $(".click_work li:nth-child(2)").on("click", function(){
	// 	$("#letter").show();
	// 	console.log('this is working');
	// });
	$(".click_work li:nth-child(3)").click(function(){
		$("#main_photo, #truck , #cards, #calendar, #riot, #tempest, #goddess, #cover, #cmwc, #landscape, #deceiver").hide();
		$("#letter").show();
	})
	$(".click_work li:nth-child(4)").click(function(){
		$("#main_photo, #truck , #cards, #letter, #riot, #tempest, #goddess, #cover, #cmwc, #landscape, #deceiver").hide();
		$("#calendar").show();
	})
	$(".click_work li:nth-child(5)").click(function(){
		$("#main_photo, #truck , #cards, #letter, #calendar, #tempest, #goddess, #cover, #cmwc, #landscape, #deceiver").hide();
		$("#riot").show();
	})
	$(".click_work li:nth-child(6)").click(function(){
		$("#main_photo, #truck , #cards, #letter, #calendar, #riot, #goddess, #cover, #cmwc, #landscape, #deceiver").hide();
		$("#tempest").show();	
	})
	$(".click_work li:nth-child(7)").click(function(){
		$("#main_photo, #truck , #cards, #letter, #calendar, #riot, #tempest,#cover, #cmwc, #landscape, #deceiver").hide();
		$("#goddess").show();	
	})
	$(".click_work li:nth-child(8)").click(function(){
		$("#main_photo, #truck , #cards, #letter, #calendar, #riot, #tempest, #goddess, #cmwc, #landscape, #deceiver").hide();
		$("#cover").show();	
	})
	$(".click_work li:nth-child(9)").click(function(){
		$("#main_photo, #truck , #cards, #letter, #calendar, #riot, #tempest, #goddess, #cover, #landscape, #deceiver").hide();
		$("#cmwc").show();
	})
	$(".click_work li:nth-child(10)").click(function(){
		$("#main_photo, #truck , #cards, #letter, #calendar, #riot, #tempest, #goddess, #cover, #cmwc, #landscape").hide();
		$("#deceiver").show();
	})
	// Attempting to create 'next' and 'previous' buttons to go through more photos for each project
	// $(".previous").click(function(){
	// 	$("#truck").hide();
	// })

	// function for clicking contact link

	$(".contact").click(function(){
		$(".email_link").show();
		$(".click_work").hide();
		$("#about").hide();
// function for clicking about link
	})
	$(".about").click(function(){
		$("#about").show();
		$(".email_link").hide();
		$(".click_work").hide();

	})
// clicking photo makes another photo appear from that project -- it does work
// 	$("#truck").click(function(){
// 		$("#bags").show();
// 		$("#main_photo, #truck , #cards, #letter, #calendar, #riot, #tempest, #goddess, #cover, #cmwc, #landscape").hide();
// 	})
});
//Originally was working on random functions for a more non-linear website
// The function does work if called
function addNumbers(){
	var numOne = parseInt($('input:first').val(), 10);
	var numTwo = parseInt($('input:last').val(), 10);
	var answer = (numOne + numTwo);
	alert(answer);

};
