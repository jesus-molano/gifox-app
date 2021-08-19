
import Container from 'components/Container';
import GoToTop from 'components/GoToTop';
import Header from 'components/Header';
import TrendingSearches from 'components/TrendingSearches';
import { Helmet } from 'react-helmet';
import './Home.css';

const Home = () => {



	return (
		<>
			<Helmet>
				<title>Home | GiFox</title>
				<meta name="description" content="The best search engine!"></meta>
			</Helmet>
			<Header />
			<div className='main'>
				<Container keyword='trending' mode='trending' />
				<TrendingSearches />
			</div>
			<GoToTop />
		</>
	);
};

export default Home;
