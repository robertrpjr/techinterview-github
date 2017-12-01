/*var divContents = document.getElementById("results");
var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/events');

request.onload = function(){
	var selectedData = JSON.parse(request.responseText);
	for (i = 0; i < 25; i++){
		
	$('.results').html(`Username: ${selectedData[i].actor.login} <br> 
		Type: ${selectedData[i].type}<br>
		Repo Name: ${selectedData[i].repo.name}<br>`);
	
	}
	
};
		
request.send();
*/

$.getJSON('https://api.github.com/events').done(data => {
	$('.results').append(data.map(datum =>
		`Username: ${datum.actor.login} <br> 
		 Type: ${datum.type} <br>
		 Repo Name: ${datum.repo.name}<br><br>`
	))
  })
