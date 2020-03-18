(function($) {
	const App = () => 'Hello World!!!';

	document.addEventListener('DOMContentLoaded', function() {
		wp.element.render(
			<App />,
			document.getElementById('react-promo-banner'),
		);
	});
})(jQuery);
