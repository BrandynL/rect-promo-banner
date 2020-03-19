export const updateOptions = banner => {
	try {
		const site_url = window.location.href.slice(
			0,
			window.location.href.indexOf('/wp-admin'),
		); // will always fire on an admin page
		fetch(`${site_url}/wp-json/react-promo-banner/v1/update-banner`, {
			method: 'POST',
			body: JSON.stringify(banner),
		})
			.then(resp => resp.json())
			.then(resp => console.log(resp));
	} catch (error) {
		console.error(error);
	}
};
