//${datum.payload.commits.url}
$.ajax({
		url: 'https://api.github.com/events',
		data:{
			client_id:'87d1ff436a9e7041f831',
			client_secret:'7de9b627d5d12024c52b89cc9e52bf2e693ab13c'
			}
		}).done(data => {
			$('#results').html(data.map(datum =>
				`
				<button class="tapMe">
					<div class="panel panel-default">
						<div class="panel-heading">
						  <h3 class="panel-title">Username: ${datum.actor.login}</h3>
						</div>
					<div class="col-md-3">
						<img class="thumbnail" src="${datum.actor.avatar_url}"
					</div>
					<div class="col-md-9">
						Type: ${datum.type} <br>
						Repo Name: ${datum.repo.name}
					</div>
				  </div>
				</button>
				  
				`
				))
				//$('.tapMe').click(function(){
				//	window.open = '${datum.payload.commits.url}'; 
				//	});
			})
			


/*
function getData() {
$.getJSON('https://api.github.com/events').done(data => {
	$('#results').html(data.map(datum =>
		`<div class="box">Username: ${datum.actor.login} <br> 
		 Type: ${datum.type} <br>
		 Repo Name: ${datum.repo.name}<br></div>`
	))
 })
}

//$('.refresh').on('click', getData);
getData();
*/