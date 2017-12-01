$.getJSON('https://api.github.com/events').done(data => {
	$('.results').append(data.map(datum =>
		`Username: ${datum.actor.login} <br> 
		 Type: ${datum.type} <br>
		 Repo Name: ${datum.repo.name}<br><br>`
	))
  })
