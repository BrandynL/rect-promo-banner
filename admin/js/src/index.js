import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

(function($) {
	document.addEventListener('DOMContentLoaded', function() {
		ReactDOM.render(<App />, document.getElementById('react-promo-banner'));
	});
})(jQuery);
