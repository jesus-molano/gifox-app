import { useEffect, useState } from "react";
import Category from "components/Category";
import getTrendingTerms from "services/getTrendingTerms";

const TrendingSearches = () => {
	const [trends, setTrends] = useState([]);

	useEffect(function () {
		getTrendingTerms().then(setTrends);
	}, []);

	return <Category name='Most Searched' options={trends} />;
};

export default TrendingSearches