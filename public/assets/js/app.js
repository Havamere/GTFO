$(".btn").on('click', function() {
	var item = $(".btn")val();
	console.log;
	//grab current URL for post method
	var currentURL = window.location.origin;

	$.post('/choice', item, function(data){
		console.log(data);
	})
	//alert("HELLOOOOOOO!!!!!");
})



