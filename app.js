(function($) {
	$(document).ready(function() {
		$('.menu-btn').on('click', function(e) {
			e.preventDefault();
			let modal = $(this).data('toggle');
			$(modal).toggleClass('show');
		});
	});
})(jQuery);