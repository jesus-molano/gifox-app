import Masonry from 'react-masonry-css';
import Gif from '../Gif';

const ListOfGifs = ({ gifs }) => {
	const breakpoints = {
		default: 5,
		1750: 4,
		1400: 3,
		1050: 2,
		700: 1,
	};

	return (
		<Masonry
			breakpointCols={breakpoints}
			className='my-masonry-grid'
			columnClassName='my-masonry-grid_column'
		>
			{gifs.map(({ id, title, url }) => (
				<Gif id={id} key={id} title={title} url={url} />
			))}
		</Masonry>
	);
};

export default ListOfGifs;
