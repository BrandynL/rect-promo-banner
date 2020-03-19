import React from 'react';

import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const BannerHeadline = ({ headline, onChange }) => {
	return (
		<Form.Group>
			<Form.Label>Banner Headline</Form.Label>
			<Form.Control
				name='headline'
				onChange={e => onChange({ text: e.target.value }, e)}
				maxlength={90}
				type='text'
				value={headline.text}
			/>
		</Form.Group>
	);
};

export const BannerDescription = ({ description, onChange }) => {
	return (
		<Form.Group>
			<Form.Label>Banner Description</Form.Label>
			<Form.Control
				name='description'
				onChange={e => onChange({ text: e.target.value }, e)}
				maxlength={180}
				as='textarea'
				value={description.text}
			/>
		</Form.Group>
	);
};

export const BannerLink = ({ link, onChange }) => {
	return (
		<Form.Group>
			<Form.Label>Banner Link</Form.Label>
			<InputGroup>
				<Form.Control
					name='link'
					onChange={e =>
						onChange({ ...link, url: e.target.value }, e)
					}
					type='text'
					value={link.url}
				/>
				<InputGroup.Append>
					<InputGroup.Checkbox
						name='link'
						onChange={e =>
							onChange(
								{ ...link, newTab: e.target.checked || false },
								e,
							)
						}
						value={link.newTab || false}
					/>
					<InputGroup.Text>New Tab?</InputGroup.Text>
				</InputGroup.Append>
			</InputGroup>
		</Form.Group>
	);
};

export const BannerTimes = ({ times, onChange }) => {
	return (
		<Form.Group>
			<Row>
				<Col>
					<Form.Label>Start Date</Form.Label>
					<Form.Control
						name='times'
						onChange={e =>
							onChange({ ...times, start: e.target.value }, e)
						}
						type='date'
						value={times.start || ''}
					/>
				</Col>
				<Col>
					<Form.Label>Expire Date</Form.Label>
					<Form.Control
						name='times'
						onChange={e =>
							onChange({ ...times, expire: e.target.value }, e)
						}
						type='date'
						value={times.expire || ''}
					/>
				</Col>
			</Row>
		</Form.Group>
	);
};

export const BannerColors = ({ colors, onChange }) => {
	return (
		<Form.Group>
			<Row>
				<Col>
					<Form.Label>Background Color</Form.Label>
					<Form.Control
						name='colors'
						onChange={e => {
							onChange(
								{ ...colors, background: e.target.value },
								e,
							);
						}}
						type='color'
						value={colors.background}
					/>
				</Col>
				<Col>
					<Form.Label>Headline Color</Form.Label>
					<Form.Control
						name='colors'
						onChange={e => {
							onChange(
								{ ...colors, headline: e.target.value },
								e,
							);
						}}
						type='color'
						value={colors.headline}
					/>
				</Col>
				<Col>
					<Form.Label>Description Color</Form.Label>
					<Form.Control
						name='colors'
						onChange={e => {
							onChange(
								{
									...colors,
									description: e.target.value,
								},
								e,
							);
						}}
						type='color'
						value={colors.description}
					/>
				</Col>
			</Row>
		</Form.Group>
	);
};

export const UrlExclusions = ({ urlExclusions, onChange }) => {
	const [show, setshow] = useState(false);
	return (
		<Form.Group>
			<Button
				variant='link'
				className='small'
				onClick={() => setshow(true)}
			>
				View/Edit URL Exclusions
			</Button>
			<Modal centered show={show} onHide={() => setshow(false)}>
				<Modal.Header closeButton>URL Exclusions</Modal.Header>
				<Modal.Body>
					<Form.Label>Add New Exclusion</Form.Label>
					<InputGroup>
						<Form.Control type='text' />
						<InputGroup.Append>
							<Button>Add</Button>
						</InputGroup.Append>
					</InputGroup>
					<ListGroup>
						{urlExclusions.map((url, index) => {
							return (
								<ListGroup.Item key={index}>
									{url}
								</ListGroup.Item>
							);
						})}
					</ListGroup>
				</Modal.Body>
			</Modal>
		</Form.Group>
	);
};

export const BannerDisabled = () => {
	return (
		<Form.Group>
			<Form.Check inline type='checkbox' label='Disable Banner?' />
		</Form.Group>
	);
};
