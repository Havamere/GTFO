$(".btn").on('click', function() {
	var item = $(this).attr("value");
	console.log(item);
	//grab current URL for post method

	$.post('/choice', item, function(data){
		console.log(data);
	})
	//alert("HELLOOOOOOO!!!!!");
})



