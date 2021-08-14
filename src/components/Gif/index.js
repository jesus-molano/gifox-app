import { Link } from 'wouter';
import './Gif.css'

const Gif = ({title, id, url}) => {
	return (
		<Link to={`/gif/${id}`} className="Gif">
			<figure>
				<img src={url} alt='giff' />
				<figcaption>{ title }</figcaption>
			</figure>
		</Link>
	);
};

export default Gif;