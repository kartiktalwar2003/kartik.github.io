$.ajaxSetup({
  headers : {
    'Authorization' : 'Bot NjM1NTUxMDA2OTg5NjE1MTQy.XaytAA.efJvWU-m21x2YFY5-sIVU1nIHu0',
    'Content-Type' : 'application/json'
  }
});


$.getJSON("https://discordapp.com/api/users/451707918320926733",
	function(data){
		console.log(data);

		var avatar = "https://cdn.discordapp.com/avatars/451707918320926733/" + data.avatar;
		$(".avatar").attr("src", avatar);
	}
);