import {
	BannerHeadline,
	BannerDescription,
	BannerTimes,
	BannerLink,
	BannerColors,
	UrlExclusions,
	BannerDisabled,
} from './components/BannerFormFields';

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export const App = () => {
	const [banner, setbanner] = useState({
		headline: {
			text: '',
		},
		description: {
			text: '',
		},
		link: {
			url: '',
			newTab: false,
		},
		times: {
			start: '',
			expire: '',
		},
		colors: {
			background: '#000000',
			headline: '#ffffff',
			description: '#ffffff',
		},
		urlExclusions: [],
		disabled: false,
	});

	const {
		headline,
		description,
		link,
		times,
		colors,
		urlExclusions,
		disabled,
	} = banner;

	const onChange = (value, e) => {
		setbanner({ ...banner, [e.target.name]: value });
	};

	return (
		<Container className='py-5'>
			<Row>
				<Col>
					<h1>Promo Banner</h1>
					<p>
						By
						<a
							href='https://brandynlordi.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Brandyn Lordi
						</a>
					</p>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col md={8}>
					<Form>
						<BannerDisabled
							disabled={disabled}
							onChange={onChange}
						/>
						<BannerHeadline
							headline={headline}
							onChange={onChange}
						/>
						<BannerDescription
							description={description}
							onChange={onChange}
						/>
						<BannerTimes times={times} onChange={onChange} />
						<BannerLink link={link} onChange={onChange} />
						<BannerColors colors={colors} onChange={onChange} />
						<UrlExclusions
							urlExclusions={urlExclusions}
							onChange={onChange}
						/>
					</Form>
				</Col>
				<Col md={4}>ad</Col>
			</Row>
		</Container>
	);
};
