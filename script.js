$.getJSON("https://kartik-avatar.herokuapp.com",
	function(data){
		var avatar = "https://cdn.discordapp.com/avatars/451707918320926733/" + data.avatar;
		$(".avatar").attr("src", avatar);
	}
);

$('.carousel-3d-autoplay-off').mdbCarousel3d({
	autoplay: false
  });