import DetailNav from 'components/DetailNav';
import Gif from 'components/Gif';
import Spinner from 'components/Spinner';
import useSingleGif from 'hooks/useSingleGif';
import { Helmet } from 'react-helmet';
import { Redirect } from 'wouter';
import './Detail.css';

const Detail = ({ params }) => {
	const { gif, isLoading, isError } = useSingleGif({ id: params.id });
	const title = gif ? gif.title : '';

	if (isLoading) {
		return (
			<>
				<Helmet>
					<title>Loading...</title>
				</Helmet>
				<Spinner />
			</>
		);
	}
	if (isError) return <Redirect to='/404' />;
	if (!gif) return null;

	return (
		<div id='detail'>
			<Helmet>
				<title>{title} | GiFox</title>
				<meta name="description" content={title}/>
			</Helmet>
			<Gif {...gif} />
			<DetailNav />
		</div>
	);
};

export default Detail;
