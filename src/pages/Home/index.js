import Container from 'components/Container';
import Header from 'components/Header';
import TrendingSearches from 'components/TrendingSearches';
import './Home.css';

const Home = () => {

	return (
		<>
			<Header />
			<div className='main'>
				<Container keyword='trending' mode='trending' />
				<TrendingSearches />
			</div>
			
		</>
	);
};

export default Home;
