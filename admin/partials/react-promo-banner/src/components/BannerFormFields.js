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
	const maxLength = 60;
	return (
		<Form.Group>
			<Form.Label>Banner Headline</Form.Label>
			<Form.Control
				name='headline'
				onChange={e => onChange({ text: e.target.value }, e)}
				maxlength={60}
				type='text'
				value={headline.text}
			/>
			<span
				className='small'
				style={{
					color: headline.text.length < maxLength ? 'green' : 'red',
				}}
			>
				{headline.text.length} / {maxLength}
			</span>
		</Form.Group>
	);
};

export const BannerDescription = ({ description, onChange }) => {
	const maxLength = 90;
	return (
		<Form.Group>
			<Form.Label>Banner Description</Form.Label>
			<Form.Control
				name='description'
				onChange={e => onChange({ text: e.target.value }, e)}
				maxlength={maxLength}
				as='textarea'
				value={description.text}
			/>
			<span
				className='small'
				style={{
					color:
						description.text.length < maxLength ? 'green' : 'red',
				}}
			>
				{description.text.length} / {maxLength}
			</span>
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
	const [exclusion, setexclusion] = useState('');
	const handleSubmit = e => {
		console.log(e);
		e.preventDefault();
		setexclusion('');
		onChange(urlExclusions.unshift(exclusion), e);
	};
	return (
		<div>
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
					<Form onSubmit={e => handleSubmit(e)}>
						<Form.Group>
							<Form.Label>Add New Exclusion</Form.Label>
							<InputGroup>
								<Form.Control
									type='text'
									placeholder='page url contains exact string'
									onChange={e => setexclusion(e.target.value)}
									value={exclusion}
								/>
								<InputGroup.Append>
									<Button type='submit'>Add</Button>
								</InputGroup.Append>
							</InputGroup>
						</Form.Group>
					</Form>
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
		</div>
	);
};

export const BannerDisabled = ({ disabled, onChange }) => {
	return (
		<Form.Group>
			<Form.Check
				name='disabled'
				onChange={e => {
					onChange(!disabled, e);
				}}
				checked={disabled}
				inline
				type='checkbox'
				label='Disable Banner?'
			/>
		</Form.Group>
	);
};
