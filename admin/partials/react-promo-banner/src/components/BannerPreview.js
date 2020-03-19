import React from 'react';
import Alert from 'react-bootstrap/Alert';

export const BannerPreview = ({ banner }) => {
	const start = new Date(banner.times.start);
	const expires = new Date(banner.times.expire);

	let bannerStatus = {};
	if (expires.getTime() < Date.now()) {
		bannerStatus = { status: 'danger', message: 'Banner expired' };
	} else if (banner.disabled) {
		bannerStatus = { status: 'danger', message: 'Banner disabled' };
	} else if (start.getTime() > Date.now()) {
		bannerStatus = { status: 'primary', message: 'Banner scheduled' };
	} else {
		bannerStatus = { status: 'success', message: 'Banner active' };
	}

	return (
		<div>
			<Alert variant={bannerStatus.status}>{bannerStatus.message}</Alert>
			<div
				style={{
					opacity: banner.disabled ? 0.25 : 1,
					backgroundColor: banner.colors.background,
					textAlign: 'center',
					padding: 15,
				}}
				className='my-3'
			>
				<h5
					style={{
						color: banner.colors.headline,
						wordBreak: 'break-word',
					}}
				>
					{banner.headline.text}
				</h5>
				<span
					style={{
						color: banner.colors.description,
						wordBreak: 'break-word',
					}}
				>
					{banner.description.text}
				</span>
			</div>
		</div>
	);
};
