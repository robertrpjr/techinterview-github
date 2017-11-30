$(document).ready(() => {

	//Make Github request
    $.ajax({
	url:'https://api.github.com/events',
	dataType: "json",
	success: function(results){
		$('.results').html(returndata[0]["actor"]['display_login']);
	
});