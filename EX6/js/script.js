$(init)
function init() {
	var $Show = $("<div class='Show'></div>");
	var $img = $("<img>");
	var $description = $("<p></p>");

	$Show.append($img).append($description);

	$("body").append($Show);

	$(".ui-Content-Pic img").click(function(e) {
		var src = $(this).attr("src");
		var des = $(this).attr("alt");

		$img.attr('src', src);
		$description.text(des);

		$Show.fadeIn('fast');

		$Show.click(function(e) {
			$Show.fadeOut('fast');
		});
	});
}