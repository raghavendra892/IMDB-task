// alert("helloo123");
let cl = console.log;

let movieinfo = document.getElementById("movieweb");

let imgurl = "https://image.tmdb.org/t/p/w1280";

let result = '';

movieArr.forEach(function(movie){
	result += `
		<div class="col-md-3">
			<div class="card mb-4">
				<figure class="moviecard">
					<img src="${imgurl}${movie.backdrop_path}" alt="${movie.title}" title="${movie.title}">
					<figcaption class="text-white p-4 bg-dark">
						<div class="row">
							<div class="col-md-9">
								<h3>${movie.title}</h3>				
							</div>
							<div class="col-md-3">
								<h3 ="rating">${movie.vote_average}</h3>			
							</div>
						</div>
					</figcaption>
					<div class="overview bg-white p-4">
						<h3>Overview:</h3>
						<h5>${movie.overview}</h5>
					</div>
				</figure>
			</div>
		</div>

	
	
	
	`;
});


movieinfo.innerHTML = result;