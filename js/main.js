//ajax API call
$(document).ready(function(){
   $.ajax({
		url: 'https://api.github.com/events',
		data:{
			//keys from GitHub OAuth Apps
			client_id:'87d1ff436a9e7041f831',
			client_secret:'7de9b627d5d12024c52b89cc9e52bf2e693ab13c'
			}
	}).done(function(data) {
		//map JSON to jQuery .each/for loop
		$('#results').html(data.map(datum =>
		    `
			<button class="tapMe">
			    <div class="panel panel-default">
				    <div class="panel-heading">
				        <h3 class="panel-title">Username: ${datum.actor.login}</h3>
			        </div>
				    <div class="panel-body">
				        <div class="row">
				            <div class="col-xs-4"> 
					            <img class="thumbnail" src="${datum.actor.avatar_url}">
				            </div>
                            <div class="col-xs-8">
					    		<div class="details">
					       			Type: ${datum.type} <br>
					       			Repo Name: ${datum.repo.name}
					    		</div>
								<div class="data2 hidden">
				    				<span>${JSON.stringify(datum)}</span>
				    	    	</div>
					  		</div>
                	    </div>
				    </div>
				</div>
			</button>
			`,				
		//toggle displayed info
		$('#results').on('click', function(){
        	$('.data2').toggleClass('hidden');
			$('.details').toggleClass('hidden');
		})
		))	
	})
})