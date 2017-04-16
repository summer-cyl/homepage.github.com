$(init)
function init() {
    $(".ui-tabs-content").hide();
    $(".ui-tabs-content:first").show();

    $(".ui-tabs li").click(function(e) {	
		$(".ui-tabs-content").hide();
		var activeTab = $(this).attr('rel'); 
		$("#" + activeTab).fadeIn();		

		$(".ui-tabs li").removeClass("active");
		$(this).addClass("active");
    });

    $(".ui-tabs li").last().addClass("ui-tabs-last");
}
	

	
	