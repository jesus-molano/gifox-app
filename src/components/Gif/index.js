import GifPlaceholder from 'components/GifPlaceholder';
import React, { useState } from 'react';
import { Link } from 'wouter';
import './Gif.css';

const Gif = ({ title, id, url }) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	const handleLoad = () => {
		setTimeout(() => setIsImageLoaded(true), 1000);
	};

	return (
		<Link to={`/gif/${id}`} className='Gif'>
			{!isImageLoaded && <GifPlaceholder />}
			<figure className={`${isImageLoaded ? 'loaded' : 'loading'}`}>
				<img
					className={`${isImageLoaded ? 'loaded' : 'loading'}`}
					loading='lazy'
					src={url}
					alt='giff'
					onLoad={handleLoad()}
				/>
				<figcaption>{title}</figcaption>
			</figure>
		</Link>
	);
};

export default React.memo(Gif, (prevProps, nextProps) => {
	return prevProps.id === nextProps.id;
});
