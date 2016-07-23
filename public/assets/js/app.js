$(".btn").on('click', function() {
	var item = $(this).val();

	//grab current URL for post method
	var currentURL = window.location.origin;

	$.post(currentURL+'/choice', item, function(data){
		console.log(data);
	})
	//alert("HELLOOOOOOO!!!!!");
})