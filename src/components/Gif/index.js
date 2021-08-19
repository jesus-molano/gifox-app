import React from 'react';
import { Link } from 'wouter';
import './Gif.css'

const Gif = ({title, id, url}) => {
	return (
		<Link to={`/gif/${id}`} className="Gif">
			<figure>
				<img loading="lazy" src={url} alt='giff' />
				<figcaption>{ title }</figcaption>
			</figure>
		</Link>
	);
};

export default React.memo(Gif, (prevProps, nextProps) => {
	return prevProps.id === nextProps.id;
});
