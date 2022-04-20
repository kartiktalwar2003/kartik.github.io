function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

document.addEventListener('contextmenu', event => event.preventDefault());

$(document).ready(function () {
  $('body').bind('cut copy', function (e) {
      e.preventDefault();
  });
});

$.getJSON("https://lazybuds.herokuapp.com/api",
	function(data){
		var avatar = "https://cdn.discordapp.com/avatars/451707918320926733/" + data.avatar;
		$(".avatar").attr("src", avatar);

    var headingElement = $(".heading");
    headingElement.text(data.link);
	}
);