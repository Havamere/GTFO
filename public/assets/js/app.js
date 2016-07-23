$(".btn").on('click', function() {
	var item = $(this).attr("value");
	console.log(item);

	$.post('/choice', item, function(data){
		console.log(data);
	});

	//alert("HELLOOOOOOO!!!!!");
})



