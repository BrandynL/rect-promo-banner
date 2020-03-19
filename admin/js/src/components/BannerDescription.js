export const BannerDescription = ({ text, fontSize }) => {
	return (
		<>
			<textarea id='' name='' cols='80' rows='10' class='all-options'>
				{text}
			</textarea>
			<span class='description'>Banner Description</span>
			<br />
		</>
	);
};
