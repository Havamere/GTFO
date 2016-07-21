var orm = require('../../../config/orm.js');


$(".btn").on('click', function() {
	var item = $(this).val();
	

	// var name = $("#playerName").val().trim();

	console.log(item);
	//alert("HELLOOOOOOO!!!!!");
})

$(".btn").click(function(){
    name=$("#playerName").val();
    pass=$("#playerPass").val();
    /*
    * Perform some validation here.
    */
	var playerName = $("input[id='playerName']").val();
	var playerPass = $("input[id='playerPass']").val();
	orm.checkSavedPlayer('game_data', 'player_name', playerName, playerPass);

    $.post("http://localhost:3000/login",{name:name,pass:pass},function(data){        
        if(data==='done')           
        {
  	console.log(name);
          window.location.href="/admin";
        }
    });
});
